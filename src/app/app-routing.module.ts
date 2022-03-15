import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AfterLoginComponent } from './components/after-login/after-login.component';
import { LoginComponent } from './components/login/login.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { InterviewerComponent } from './components/interviewer/interviewer.component';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },
  {
    path:'al',
    component: AfterLoginComponent
  },
  {
    path:'interv',
    component: InterviewerComponent
  },
  {
    path:'recr',
    component: RecruiterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
