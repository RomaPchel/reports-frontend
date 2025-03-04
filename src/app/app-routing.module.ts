import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ReportComponent } from './pages/report/report.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
