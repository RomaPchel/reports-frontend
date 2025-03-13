import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './pages/report/report.component';
import { HeaderComponent } from './components/header/header.component';
import { PdfReportComponent } from './pages/pdf-report/pdf-report.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FbLoginCallbackComponent } from './pages/fb-login-callback/fb-login-callback.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';  // Add this import

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    ReportComponent,
    HeaderComponent,
    PdfReportComponent,
    LoginComponent,
    HomeComponent,
    FbLoginCallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
