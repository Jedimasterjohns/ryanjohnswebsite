import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes, } from '@angular/router';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { ResumeComponent } from './resume/resume.component';
import { AboutComponent } from './about/about.component';

import { GlobalServiceManager } from './_services/global-service-manager.service';

import { ScrollToModule } from 'ng2-scroll-to';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTooltipModule,
    ScrollToModule.forRoot(),
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AppNavigationComponent,
    ResumeComponent,
    AboutComponent,
    BlogComponent
  ],
  providers: [
    GlobalServiceManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
