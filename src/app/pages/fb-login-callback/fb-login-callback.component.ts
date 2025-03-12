import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fb-login-callback',
  templateUrl: './fb-login-callback.component.html',
  styleUrl: './fb-login-callback.component.scss'
})
export class FbLoginCallbackComponent {

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      console.log('Facebook auth code:', code);
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        const appId = '1187569946099353';
        const redirectUri = 'http://localhost:4200/fb-login-callback';
        const appSecret = '2096c581c60d69fcd7800d41d8adf60c'; // Replace with actual app secret
        
        const accessTokenUrl = `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${code}`;

        // Make HTTP request to get access token
        fetch(accessTokenUrl)
          .then(response => response.json())
          .then(data => {
            console.log('Access token response:', data);
            // Store access token or handle response
          })
          .catch(error => {
            console.error('Error getting access token:', error);
          });
      }
    });
  }
}
