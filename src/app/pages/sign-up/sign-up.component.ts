import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async onSubmit() {
    try {
      const response = await this.authService.register(this.email, this.password);
      if (response.accessToken) {
        // Registration successful, redirect to home/dashboard
        this.router.navigate(['/']);
      }
    } catch (error) {
      // Handle error cases
      console.error('Registration failed:', error);
      // You may want to show an error message to the user
    }
  }
}
