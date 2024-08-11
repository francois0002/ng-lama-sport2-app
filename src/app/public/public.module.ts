import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from '../pages/inscription/inscription-step1/inscription.component';
import { HomeLoginComponent } from '../pages/home-login/home-login.component';
import { ProgressBarComponent } from '../pages/inscription/progress-bar/progress-bar.component';
import { PublicRoutingModule } from './app-routing-public.module';
import { InscriptionStep2Component } from '../pages/inscription/inscription-step2/inscription-step2.component';
import { EmailButtonComponent } from '../button/email-button/email-button.component';
import { PasswordButtonComponent } from '../button/password-button/password-button.component';
import { BackButtonComponent } from '../button/back-button/back-button.component';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    InscriptionComponent,
    HomeLoginComponent,
    ProgressBarComponent,
    InscriptionStep2Component,
    BackButtonComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    EmailButtonComponent,
    PasswordButtonComponent,
    MatButtonModule
  ]
})
export class PublicModule { }
