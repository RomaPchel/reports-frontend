import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  loginWithFacebook() {
    // Initialize Facebook login URL with required permissions
    const facebookAuthUrl = 'https://www.facebook.com/v22.0/dialog/oauth?' +
      'client_id=1159141922525246' + 
      '&redirect_uri=' + encodeURIComponent('http://localhost:4200/') +
      '&scope=read_insights,pages_show_list,ads_management,ads_read,business_management,instagram_basic,instagram_manage_insights,pages_read_engagement,instagram_branded_content_brand,instagram_branded_content_ads_brand' +
      '&response_type=token';

    // Open Facebook login popup
    const width = 600;
    const height = 600; 
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      facebookAuthUrl,
      'facebook-login', 
      `width=${width},height=${height},left=${left},top=${top}`
    );
  }

}
