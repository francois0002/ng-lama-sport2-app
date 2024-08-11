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
import { MatButtonModule } from '@angular/material/button';
import { NameButtonComponent } from '../button/name-button/name-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { UserInfoFormComponent } from '../button/user-info/user-info.component';
import { InscriptionStep3Component } from '../pages/inscription/inscription-step3/inscription-step3.component';
import { FormChoiceLevelComponent } from '../button/form-choice-level/form-choice-level.component';
import { FormChoiceLevelRankingComponent} from '../button/form-choice-level-ranking/form-choice-level-ranking.component';

@NgModule({
  declarations: [
    InscriptionComponent,
    HomeLoginComponent,
    ProgressBarComponent,
    InscriptionStep2Component,
    InscriptionStep3Component,
    BackButtonComponent,
    UserInfoFormComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    EmailButtonComponent,
    PasswordButtonComponent,
    MatButtonModule,
    NameButtonComponent,
    MatInputModule,
    MatFormFieldModule,
    FormChoiceLevelComponent,
    FormChoiceLevelRankingComponent,
    ReactiveFormsModule,
  ]
})
export class PublicModule { }
