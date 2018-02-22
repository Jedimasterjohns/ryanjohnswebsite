import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import * as Typed from 'typed.js';
import { GlobalServiceManager } from '../_services/global-service-manager.service';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd } from '@angular/router';
import { ScrollToModule } from 'ng2-scroll-to';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements AfterViewInit {
  showScrollPrompter: Observable<boolean>;

  constructor(private globalServiceManager: GlobalServiceManager) {
    this.showScrollPrompter = globalServiceManager.showScrollPrompter;
   }

  ngAfterViewInit() {
    const greetingLine =  'Software developer with a tenacity to increase efficiency and inspire creativity.<br>' +
                          'Test Automation Engineer at Xactware with web development experience.<br><br>' +
                          'I build <em>sturdy testing frameworks</em>  and <em>responsive web applications</em>.';
    const typed = new Typed('.intro-text', {
      strings: [greetingLine],
      startDelay: 1500,
      typeSpeed: 10,
      autoInsertCss: true,
      cursorChar: ' |',
      fadeOut: true,
      onComplete: () => { this.globalServiceManager.activateScrollPrompter(); }
    });
  }
}
