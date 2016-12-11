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
const core_1 = require('@angular/core');
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Siddhanath';
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: `
<div class="navbar navbar-default navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a href="http://siddhanath.org">
                <img height="100" width="100" src="siddhanath-logo-web.png" alt="Siddhanath">
              </a>
            </div>
            <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav  navbar-right">
                <li class="padding-top30">
            <a routerLink="/home"  routerLinkActive="active">Home</a>
            </li>
            <li class="padding-top30">
              <a routerLink="/event" routerLinkActive="active">Events</a>
            </li>
            <li class="padding-top30">
              <a routerLink="/about" routerLinkActive="active">About</a>
            </li>
            <li class="padding-top30">
              <a routerLink="/nlam" routerLinkActive="active">NLAM</a>
            </li>
            <li class="padding-top30">
              <a routerLink="/contact" routerLinkActive="active">Contact</a>
            </li>
            
                </ul>
            </div>
        </div>
    </div>
<router-outlet></router-outlet>

`
    }), 
    __metadata('design:paramtypes', [])
], AppComponent);
exports.AppComponent = AppComponent;
