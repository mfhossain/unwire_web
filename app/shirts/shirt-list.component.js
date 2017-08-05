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
var shirt_service_1 = require("./shirt.service");
var ShirtListComponent = (function () {
    function ShirtListComponent(_shirtService) {
        this._shirtService = _shirtService;
        this.pageTitle = "Shirt List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.listFilter = '';
    }
    ShirtListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._shirtService.getShirtList()
            .subscribe(function (shirts) { return _this.shirts = shirts; }, function (error) { return _this.errorMessage = error; });
    };
    return ShirtListComponent;
}());
ShirtListComponent = __decorate([
    core_1.Component({
        selector: 'unwire-shirtstore-shirtlist',
        templateUrl: 'app/shirts/shirt-list.component.html',
        styleUrls: ['app/shirts/shirt-list.component.css']
    }),
    __metadata("design:paramtypes", [shirt_service_1.ShirtService])
], ShirtListComponent);
exports.ShirtListComponent = ShirtListComponent;
//# sourceMappingURL=shirt-list.component.js.map