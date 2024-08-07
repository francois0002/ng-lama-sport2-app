import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from '../pages/inscription/inscription.component';
import { HomeLoginComponent } from '../pages/home-login/home-login.component';
import { PublicRoutingModule } from './app-routing-public.module';

@NgModule({
  declarations: [
    InscriptionComponent,
    HomeLoginComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
