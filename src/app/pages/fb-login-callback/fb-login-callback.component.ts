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
      // const code = "AQC9sCbT3QTjWOiJPTlPtcxRZwUvnj__WVBIsdmdugdDhNyPfvTYKQG3i5_9R6CZpbFVZNhkbxqAwtVFMmbE1VZYoDqWomQILnqivtawJqbCqzAFv9AlLsX0S27WpM04v6mhxd9tTvu0wQPMdWxHEURzz7ms6LCiYgiVm49fRPAcWLjKdM3sAEh0bj6fWhEoneDYZ6xe-1otDfhys8ehTI_IpJstGTuH_gSrV5TRDEC26aIH9jVXhANT2ezXQ-JCZMTzfiE8Q8twjZB7TqxFXQALX4f_efQOUJCjqxK3-N3sXwHZ01spUkbuyDTc_lNM8Afbu_On7MFGfX0xst3s1dJJuqANNrE6sl9i13j1wzXZiKY7ZWFAkixs38K9v9Qm8iKdSLB1jqZEGyjA1Lu3-C6u"
      if (code) {
        const appId = '1187569946099353';
        const redirectUri = 'https://derevian.co/saas/fb-login-callback';
        // const redirectUri = 'http://localhost:4200/fb-login-callback';
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
