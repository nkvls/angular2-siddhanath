import {NgModule}         from '@angular/core';
import {BrowserModule}    from '@angular/platform-browser';
import {RouterModule}     from '@angular/router';
import {AppComponent}     from './app.component';
import {HomeComponent}  from './app.home.component';
import {AboutComponent}  from './app.about.component';
import {EventComponent}  from './app.event.component';
import {ContactComponent} from './app.contact.component';
import {NLAMComponent} from './app.nlam.component';
import {FooterComponent} from './app.footer.component';
import {GalleryComponent} from './app.gallery.component';
import {enableProdMode} from '@angular/core';

enableProdMode();

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'nlam', component: NLAMComponent },
    { path: 'footer', component: FooterComponent },
    { path: 'gallery', component: GalleryComponent },
    { path: '', component: HomeComponent }

    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    EventComponent,
    ContactComponent,
    NLAMComponent,
    FooterComponent,
    GalleryComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
