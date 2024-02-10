import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientsComponent } from './patient/pages/patients/patients.component';

const routes: Routes = [
  {
    path: 'patients',
    component: PatientsComponent
  },
  {
    path: '**',
    redirectTo: 'patients'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
