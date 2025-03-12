import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userProfile: {
    picture: {
      data: {
        url: string
      }
    },
    name: string
  } = {
    picture: {
      data: {
        url: ''
      }
    },
    name: ''
  };

  constructor(private router: Router) {}

  ngOnInit() {
    // Get user data from localStorage
    const userAvatar = localStorage.getItem('userAvatar');
    const userName = localStorage.getItem('userName');

    // Update userProfile object
    if (userAvatar && userName) {
      this.userProfile.picture.data.url = userAvatar;
      this.userProfile.name = userName;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
  
}
