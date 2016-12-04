import {Component}        from '@angular/core';


@Component ({
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
})
export class AppComponent {
title = 'Siddhanath';
 }
