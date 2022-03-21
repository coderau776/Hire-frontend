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
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FontAwesomeModule
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
