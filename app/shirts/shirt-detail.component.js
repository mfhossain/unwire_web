"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var shirt_service_1 = require("./shirt.service");
var ShirtDetailComponent = (function () {
    function ShirtDetailComponent(_route, _router, _shirtService) {
        this._route = _route;
        this._router = _router;
        this._shirtService = _shirtService;
        this.pageTitle = 'Shirt Detail';
    }
    ShirtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this.pageTitle += ": " + id;
        this._shirtService.getShirt(id)
            .subscribe(function (shirts) { return _this.shirts = shirts; }, function (error) { return _this.errorMessage = error; });
    };
    ShirtDetailComponent.prototype.onBack = function () {
        this._router.navigate(['/shirts']);
    };
    return ShirtDetailComponent;
}());
ShirtDetailComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/shirts/shirt-detail.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router, shirt_service_1.ShirtService])
], ShirtDetailComponent);
exports.ShirtDetailComponent = ShirtDetailComponent;
//# sourceMappingURL=shirt-detail.component.js.map