import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './authGuard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
