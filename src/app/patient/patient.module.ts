import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsComponent } from './pages/patients/patients.component';
import { MaterialModule } from '../material.module';
import { SavePatientComponent } from './modals/save-patient/save-patient.component';


@NgModule({
  declarations: [
    PatientsComponent,
    SavePatientComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
  ]
})
export class PatientModule { }
