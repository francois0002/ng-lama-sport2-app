import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionComponent } from '../pages/inscription/inscription.component';
import { HomeLoginComponent } from '../pages/home-login/home-login.component';




const routes: Routes = [

    { path: '', redirectTo: 'HomeLogin', pathMatch: 'full' },
    { path: 'HomeLogin', component: HomeLoginComponent },
    { path: 'InscriptionStep1', component: InscriptionComponent  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

