import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChartsModule} from 'ng2-charts';
import { Ng2SearchPipeModule} from 'ng2-search-filter';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProfileComponent } from './profile/profile.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NumofempComponent } from './dashboard/numofemp/numofemp.component';
import { BirthdayinfoComponent } from './dashboard/birthdayinfo/birthdayinfo.component';
import { AuthGuard } from './authGuard/auth.guard';
import { AuthService } from './_services/auth.service';
import { EmpposComponent } from './dashboard/emppos/emppos.component';
import { ProgressionComponent } from './dashboard/progression/progression.component';
import { AlertifyService } from './_services/alertify.service';
import { GendergraphComponent } from './dashboard/gendergraph/gendergraph.component';
import { ProgressbarsComponent } from './dashboard/progressbars/progressbars.component';


@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      EmployeeComponent,
      ProfileComponent,
      NavComponent,
      DashboardComponent,
      NumofempComponent,
      EmpposComponent,
      BirthdayinfoComponent,
      ProgressionComponent,
      ProgressbarsComponent,
      GendergraphComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ChartsModule,
      Ng2SearchPipeModule

   ],
   providers: [AuthGuard, AuthService, AlertifyService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
