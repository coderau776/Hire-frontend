import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
} from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoogleSignInComponent } from './components/login/google-sign-in/google-sign-in.component';
import { AfterLoginComponent } from './components/after-login/after-login.component';
import { LoginComponent } from './components/login/login.component';
import { CardComponent } from './components/after-login/card/card.component';
import { InterviewerComponent } from './components/interviewer/interviewer.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { SlotViewComponent } from './components/interviewer/slot-view/slot-view.component';
import { CalendarComponent } from './components/interviewer/slot-view/calendar/calendar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditFormComponent } from './components/interviewer/slot-view/edit-form/edit-form.component';
import { ScheduleComponent } from './components/interviewer/slot-view/schedule/schedule.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PanelistComponent } from './components/interviewer/panelist/panelist.component';
import { LeftComponent } from './components/recruiter/left/left.component';
import { RightComponent } from './components/recruiter/right/right.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent, 
    GoogleSignInComponent,
    AfterLoginComponent,
    LoginComponent,
    CardComponent,
    InterviewerComponent,
    RecruiterComponent,
    SlotViewComponent,
    CalendarComponent,
    EditFormComponent,
    ScheduleComponent,
    PanelistComponent,
    LeftComponent,
    RightComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '741004585610-9juju2t78661vasfdp6bqnbmfpcuoo7k.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
