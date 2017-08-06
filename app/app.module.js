"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var shirt_list_component_1 = require("./shirts/shirt-list.component");
var shirt_guard_service_1 = require("./shirts/shirt-guard.service");
var shirt_detail_component_1 = require("./shirts/shirt-detail.component");
var shirt_filter_pipe_1 = require("./shirts/shirt-filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'shirts', component: shirt_list_component_1.ShirtListComponent },
                { path: 'shirt/:id',
                    canActivate: [shirt_guard_service_1.ShirtDetailGuard],
                    component: shirt_detail_component_1.ShirtDetailComponent },
                { path: '', redirectTo: 'shirts', pathMatch: 'full' },
                { path: '**', redirectTo: 'shirts', pathMatch: 'full' }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            shirt_list_component_1.ShirtListComponent,
            shirt_detail_component_1.ShirtDetailComponent,
            shirt_filter_pipe_1.ShirtFilterPipe
        ],
        providers: [shirt_guard_service_1.ShirtDetailGuard],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map