import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialAuthService, SocialAuthServiceConfig } from 'angularx-social-login';

import { GoogleSignInComponent } from './google-sign-in.component';

describe('GoogleSignInComponent', () => {
  let component: GoogleSignInComponent;
  let fixture: ComponentFixture<GoogleSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleSignInComponent ],
      providers: [
        {
          provide: 'SocialAuthServiceConfig',
          useValue: {
          autoLogin: false,
          } as SocialAuthServiceConfig,
        },
        SocialAuthService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
