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
let EventComponent = class EventComponent {
};
EventComponent = __decorate([
    core_1.Component({
        selector: 'my-event',
        template: `
    <div style="background-color:#E0B13A;;height:100px;"></div>
    <div style="background-color:#5336f3;">
      <img src="images/events-main.jpg" style="width:100%;height:800px;">
    </div>
<div style="padding:30px;width:66%;display:inline-block;">
<marquee>
    <h2>For latest UK event please visit this section</h2>
</marquee>
</div>
<my-footer></my-footer>
  `
    }), 
    __metadata('design:paramtypes', [])
], EventComponent);
exports.EventComponent = EventComponent;
