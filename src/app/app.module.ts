import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*Initiated All router functionalities in this module*/
import { AppRoutingModule } from './app-routing.module';
/*All Screens Components*/
import { AppComponent } from './app.component';
import { AboutProductComponent } from './about-product/about-product.component';
import { ProductTabComponent } from './about-product/product-tab/product-tab.component';
import { PricingTabComponent } from './about-product/pricing-tab/pricing-tab.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

/*Browser Animation Module*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*All Material Components Implemented into material components Module*/
import { MaterialComponentsModule } from './material-components/material-components.module';

/*Service for page window scroll animations*/
import { WINDOW_PROVIDERS } from './about-product/window.service';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  /*Declare all components in this declarations section*/
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AboutProductComponent,
    ProductTabComponent,
    PricingTabComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  /*Adding root component*/
  bootstrap: [AppComponent]
})
export class AppModule { }
