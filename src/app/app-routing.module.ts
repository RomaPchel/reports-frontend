import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReportComponent } from './pages/report/report.component';
import { PdfReportComponent } from './pages/pdf-report/pdf-report.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    // canActivate: [authGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'report',
    component: ReportComponent
  },
  {
    path: 'report/:id',
    component: ReportComponent
  },
  {
    path: 'pdf-report/:id',
    component: PdfReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
