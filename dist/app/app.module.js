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
const platform_browser_1 = require('@angular/platform-browser');
const router_1 = require('@angular/router');
const app_component_1 = require('./app.component');
const app_home_component_1 = require('./app.home.component');
const app_about_component_1 = require('./app.about.component');
const app_event_component_1 = require('./app.event.component');
const app_contact_component_1 = require('./app.contact.component');
const app_nlam_component_1 = require('./app.nlam.component');
const app_footer_component_1 = require('./app.footer.component');
const app_gallery_component_1 = require('./app.gallery.component');
const core_2 = require('@angular/core');
core_2.enableProdMode();
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot([
                { path: 'home', component: app_home_component_1.HomeComponent },
                { path: 'about', component: app_about_component_1.AboutComponent },
                { path: 'event', component: app_event_component_1.EventComponent },
                { path: 'contact', component: app_contact_component_1.ContactComponent },
                { path: 'nlam', component: app_nlam_component_1.NLAMComponent },
                { path: 'footer', component: app_footer_component_1.FooterComponent },
                { path: 'gallery', component: app_gallery_component_1.GalleryComponent },
                { path: '', component: app_home_component_1.HomeComponent }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            app_home_component_1.HomeComponent,
            app_about_component_1.AboutComponent,
            app_event_component_1.EventComponent,
            app_contact_component_1.ContactComponent,
            app_nlam_component_1.NLAMComponent,
            app_footer_component_1.FooterComponent,
            app_gallery_component_1.GalleryComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }), 
    __metadata('design:paramtypes', [])
], AppModule);
exports.AppModule = AppModule;
