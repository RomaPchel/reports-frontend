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
    // this.facebookInit();
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId      : '{your-app-id}',
    //     cookie     : true,
    //     xfbml      : true,
    //     version    : '{api-version}'
    //   });
        
    //   FB.AppEvents.logPageView();   
        
    // };
  
    // (function(d, s, id){
    //    var js: any, fjs = d.getElementsByTagName(s)[0];
    //    if (d.getElementById(id)) {return;}
    //    js = d.createElement(s); js.id = id;
    //    js.src = "https://connect.facebook.net/en_US/sdk.js";
    //    fjs!.parentNode!.insertBefore(js, fjs!);
    //  }(document, 'script', 'facebook-jssdk'));

    //  FB.getLoginStatus(function(response: any) {
    //   console.log(response);
    // });

  }

  facebookInit(){
    // window.fbAsyncInit = function() {
    //   FB.init({
    //     appId: '1346715266243780',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v20.0',
    //     scope: "email"
    //   });
    //   FB.AppEvents.logPageView();
    // };
    // const script = document.createElement('script');
    // script.id = 'facebook-jssdk';
    // script.src = "https://connect.facebook.net/en_US/sdk.js";
    // document.body.appendChild(script);

    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1187569946099353', // Replace with your App ID
        cookie: true,
        xfbml: true,
        version: 'v22.0' // Ensure to use the latest version
      });
    };

    console.log(FB)
  }

  signInWithFacebook() {

    // this.facebookInit();

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

    // FB.login((response:any) => {
    //   console.log(response);
    //   // if (response.authResponse) {
    //   //   this.authService.signInFacebook(response.authResponse)
    //   //     .subscribe({
    //   //       next: (response) => {
    //   //         this.hubRedirect();
    //   //       }
    //   //     });
    //   // }
    //   this.getFacebookUserProfile();
    // }, {
    //   config_id: "948776370752030"
    //   // scope: 'read_insights'
    //   // ,pages_show_list,ads_management,ads_read,business_management,instagram_basic,instagram_manage_insights,pages_read_engagement,instagram_branded_content_brand,instagram_branded_content_ads_brand
    // });
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
