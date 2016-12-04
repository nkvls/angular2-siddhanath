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
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'my-contact',
            template: "\n  <div style=\"background-color:#E0B13A;;height:100px;\"></div>\n  <div style=\"background-color:#5336f3;\">\n    <img src=\"images/contactus.jpg\" style=\"width:100%;height:800px;\">\n  </div>\n\n  <div>\n    Thank you for visiting our website! Please use the form on this page to contact us and we will get back to you as soon as possible. For urgent inquiries please call our phone number or email us directly.\n\n    Mailing Address:\n    100 Pine Street, Suite 1250,\n    San Francisco CA 94111\n\n    E-Mail:\n    info@siddhanath.org\n</div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=app.contact.component.js.map