import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  showHeader = true;

  constructor(private router: Router) {
    // Listen to route changes
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = event.url === '/';
      }
    });
  }
}
