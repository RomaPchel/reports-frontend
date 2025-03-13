import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fb-login-callback',
  templateUrl: './fb-login-callback.component.html',
  styleUrl: './fb-login-callback.component.scss'
})
export class FbLoginCallbackComponent {

  accessToken: string = ''

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
        // const redirectUri = 'http://localhost:4200/fb-login-callback';

        const appId = '1187569946099353';
        const redirectUri = 'https://derevian.co/saas/fb-login-callback';
        const code = ""
        const appSecret = '2096c581c60d69fcd7800d41d8adf60c';
        
        const accessTokenUrl = `https://graph.facebook.com/v18.0/oauth/access_token?client_id=${appId}&redirect_uri=${redirectUri}&client_secret=${appSecret}&code=${code}`;

        fetch(accessTokenUrl)
          .then(response => response.json())
          .then(data => {
            console.log('Access token response:', data);
            this.accessToken = data.access_token;
          })
          .catch(error => {
            console.error('Error getting access token:', error);
          });
      }
    });
  }
}
