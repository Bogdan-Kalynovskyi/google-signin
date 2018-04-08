import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HttpsRequestInterceptor } from './modules/interceptor.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { AuthGuard } from './services/auth-guard';
import { AuthService } from './services/auth.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
    ],
    bootstrap: [AppComponent],
    providers: [
      AuthGuard,
      {
        provide: HTTP_INTERCEPTORS, 
        useClass: HttpsRequestInterceptor, 
        multi: true
      },
      AuthService,
    ]
})
export class AppModule { }


 

 
