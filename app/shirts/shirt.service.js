"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShirtService = (function () {
    function ShirtService() {
    }
    ShirtService.prototype.getShirtList = function () {
        return [
            {
                "id": 0,
                "price": 88,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "m",
                "name": "Southview Clarke",
                "quantity": 0
            },
            {
                "id": 1,
                "price": 63,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "m",
                "name": "Barronett Higgins"
            },
            {
                "id": 2,
                "price": 28,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "l",
                "name": "Summertown Garrison",
                "quantity": 2
            },
            {
                "id": 3,
                "price": 19,
                "picture": "https://unsplash.it/128/128",
                "colour": "green",
                "size": "m",
                "name": "Yogaville Lamb"
            },
            {
                "id": 4,
                "price": 97,
                "picture": "https://unsplash.it/128/128",
                "colour": "green",
                "size": "s",
                "name": "Hayes Hanson"
            },
            {
                "id": 5,
                "price": 86,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "m",
                "name": "Homeworth Dalton"
            },
            {
                "id": 6,
                "price": 98,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "l",
                "name": "Westboro Frank"
            },
            {
                "id": 7,
                "price": 16,
                "picture": "https://unsplash.it/128/128",
                "colour": "blue",
                "size": "m",
                "name": "Baker Powell"
            },
            {
                "id": 8,
                "price": 58,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "l",
                "name": "Conway Bradshaw",
                "quantity": 1
            },
            {
                "id": 9,
                "price": 13,
                "picture": "https://unsplash.it/128/128",
                "colour": "brown",
                "size": "l",
                "name": "Woodlake Wilcox"
            },
            {
                "id": 10,
                "colour": "black",
                "name": "Super shirt",
                "size": "x-large",
                "picture": "https://unsplash.it/128/128",
                "price": 10
            },
            {
                "id": 11,
                "colour": "string",
                "name": "string",
                "size": "string",
                "picture": "https://unsplash.it/128/128",
                "price": 10,
                "quantity": 8
            },
            {
                "id": 12,
                "colour": "black",
                "name": "roadster black",
                "size": "m",
                "picture": "https://unsplash.it/128/128",
                "price": 10
            },
            {
                "id": 13,
                "colour": "black",
                "name": "roadster brown",
                "size": "m",
                "picture": "https://unsplash.it/128/128",
                "price": 10
            }
        ];
    };
    return ShirtService;
}());
ShirtService = __decorate([
    core_1.Injectable()
], ShirtService);
exports.ShirtService = ShirtService;
//# sourceMappingURL=shirt.service.js.map