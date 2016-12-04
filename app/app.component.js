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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Siddhanath';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<div class=\"navbar navbar-default navbar-fixed-top\">\n        <div class=\"container\">\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                </button>\n                <a href=\"http://siddhanath.org\">\n                <img height=\"100\" width=\"100\" src=\"siddhanath-logo-web.png\" alt=\"Siddhanath\">\n              </a>\n            </div>\n            <div class=\"navbar-collapse collapse\">\n                <ul class=\"nav navbar-nav  navbar-right\">\n                <li class=\"padding-top30\">\n            <a routerLink=\"/home\"  routerLinkActive=\"active\">Home</a>\n            </li>\n            <li class=\"padding-top30\">\n              <a routerLink=\"/event\" routerLinkActive=\"active\">Events</a>\n            </li>\n            <li class=\"padding-top30\">\n              <a routerLink=\"/about\" routerLinkActive=\"active\">About</a>\n            </li>\n            <li class=\"padding-top30\">\n              <a routerLink=\"/nlam\" routerLinkActive=\"active\">NLAM</a>\n            </li>\n            <li class=\"padding-top30\">\n              <a routerLink=\"/contact\" routerLinkActive=\"active\">Contact</a>\n            </li>\n            \n                </ul>\n            </div>\n        </div>\n    </div>\n<router-outlet></router-outlet>\n\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map