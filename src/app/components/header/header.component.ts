import { Component } from '@angular/core';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

  showSignUpModal() {
    this.dialog.open(SignUpComponent, {
      width: '400px'
    });
  }

}
