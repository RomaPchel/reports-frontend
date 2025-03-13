import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatDialogModule } from '@angular/material/dialog';

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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

// Register Swiper custom elements
register();

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
    FbLoginCallbackComponent,
    DashboardHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
