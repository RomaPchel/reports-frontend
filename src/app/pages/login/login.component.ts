import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import Facebook from "facebook-js-sdk";
declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(
    private router: Router
  ) {}

  ngOnInit(){
  }

  signInWithFacebook() {
    
    FB.init({
      appId: '1187569946099353', // Replace with your App ID
      cookie: true,
      xfbml: true,
      version: 'v22.0' // Ensure to use the latest version
    });

    FB.AppEvents.logPageView();

    FB.getLoginStatus(function(response: any) {
      console.log(response);
    });

    FB.login((response:any) => {
      console.log(response);
      this.getFacebookUserProfile();
    }, {
      config_id: "948776370752030",
      scope: 'ads_management'
      // scope: 'read_insights'
      // ,pages_show_list,ads_management,ads_read,business_management,instagram_basic,instagram_manage_insights,pages_read_engagement,instagram_branded_content_brand,instagram_branded_content_ads_brand
    });
  }

  getFacebookUserProfile() {
    FB.api('/me', { fields: 'name,email,picture' }, (response: any) => {
      console.log('User Profile:', response);
      localStorage.setItem('userAvatar', response.picture.data.url);
      localStorage.setItem('userName', response.name);
      this.router.navigate(['/home']);
    });
  }

  

}
