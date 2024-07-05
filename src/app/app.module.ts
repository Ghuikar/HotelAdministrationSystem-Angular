import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material-module';
import { HomeComponent } from './home/home.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from './shared/shared.module';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxUiLoaderConfig, SPINNER, PB_DIRECTION, NgxUiLoaderModule } from 'ngx-ui-loader';

const ngxUiLoaderConfig: NgxUiLoaderConfig = {
  bgsColor: '#00ACC1', // Background spinner color
  bgsOpacity: 0.5, // Background spinner opacity
  bgsPosition: 'bottom-right', // Background spinner position
  bgsSize: 60, // Background spinner size
  fgsColor: '#FF0000', // Foreground spinner color
  fgsPosition: 'center-center', // Foreground spinner position
  fgsSize: 60, // Foreground spinner size
  logoUrl: '', // Custom logo URL
  pbColor: '#00ACC1', // Progress bar color
  pbDirection: PB_DIRECTION.leftToRight, // Progress bar direction (left-to-right)
  pbThickness: 3, // Progress bar thickness
  fgsType: SPINNER.ballSpinClockwise, // Spinner type (Square Jelly Box)
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig) // Use ngxUiLoaderConfig in forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
