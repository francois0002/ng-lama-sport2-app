import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLoginComponent } from '../pages/home-login/home-login.component';
import { InscriptionComponent } from '../pages/inscription/inscription-step1/inscription.component';
import { InscriptionStep2Component } from '../pages/inscription/inscription-step2/inscription-step2.component';
import { InscriptionStep3Component } from '../pages/inscription/inscription-step3/inscription-step3.component';



const routes: Routes = [

    { path: '', redirectTo: 'HomeLogin', pathMatch: 'full' },
    { path: 'HomeLogin', component: HomeLoginComponent },
    { path: 'InscriptionStep1', component: InscriptionComponent  },
    { path: 'InscriptionStep2', component: InscriptionStep2Component  },
    { path: 'InscriptionStep3', component: InscriptionStep3Component  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

