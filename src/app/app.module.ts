import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AuthModule as OAuthModule, HttpMethod} from '@auth0/auth0-angular';
import {AuthModule} from './auth/auth.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    OAuthModule.forRoot({
      domain: 'dev-qzfc4ny.eu.auth0.com',
      clientId: 'kfVJre1y5dvwjy6JWDzYmN1hAhF1HMmr',
      redirectUri: window.location.origin,

      // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
          environment.baseURL + '*'
        ]
      }
    }),
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
