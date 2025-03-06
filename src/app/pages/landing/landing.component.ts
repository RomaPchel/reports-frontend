import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  headline: string = '';

  headlines: string[] = [
    'Automated Facebook Reports.<br>Happy Clients, Effortless Growth',
    'Stop Wasting Hours on Manual Reports.<br>Retain Clients with Automated Facebook Insights',
    'Scale Your Agency, Not Your Reporting Time.<br>Instant, Automated Facebook Reports',
    'Deliver Proactive Facebook Insights.<br>Boost Client Retention, Automatically',
    'Facebook Reports.<br>Automated. Simplified. Growth.'
  ]

  subheadline: string = '';

  subheadlines: string[] = [
    'Connect your Facebook accounts, set up custom weekly or monthly reports, and deliver valuable insights to your clients, all on autopilot.',
    'Our platform generates and sends detailed Facebook performance reports, freeing up your time and keeping your clients engaged and informed.',
    'Create and schedule comprehensive Facebook reports in minutes. Spend more time on strategy and client growth, not tedious data entry.',
    'Impress your clients with consistent, data-driven reports. Our automated system delivers key metrics directly to their inbox.',
    'Instantly connect your facebook accounts, and schedule automatic reports. Save time and increase client retention.'
  ];

  ngOnInit() {
    this.setupHeadline();
    this.setupSubheadline();
  }

  setupHeadline() {
    this.headline = this.headlines[Math.floor(Math.random() * this.headlines.length)];
  }

  setupSubheadline() {
    this.subheadline = this.subheadlines[Math.floor(Math.random() * this.subheadlines.length)];
  }

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
