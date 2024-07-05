import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MaterialModule } from '../shared/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordsComponent } from './forget-passwords/forget-passwords.component';


@NgModule({
  declarations: [
    FeatureComponent,
    LoginComponent,
    SignUpComponent,
    ForgetPasswordsComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LoginComponent]
})
export class FeatureModule { }
