import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.scss'
})
export class DashboardHeaderComponent {
  isMobileMenuOpen: boolean = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

}
