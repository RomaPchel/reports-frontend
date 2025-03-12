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
    this.facebookInit();
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
        appId: '1159141922525246', // Replace with your App ID
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
      appId: '1159141922525246', // Replace with your App ID
      cookie: true,
      xfbml: true,
      version: 'v22.0' // Ensure to use the latest version
    });

    FB.login((response:any) => {
      console.log(response);
      // if (response.authResponse) {
      //   this.authService.signInFacebook(response.authResponse)
      //     .subscribe({
      //       next: (response) => {
      //         this.hubRedirect();
      //       }
      //     });
      // }
      this.getFacebookUserProfile();
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
