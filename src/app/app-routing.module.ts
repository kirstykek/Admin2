import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdiminComponent } from './adimin/adimin.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import{PatientDetailsComponent} from './patient-details/patient-details.component';
import{AppointmentComponent} from './appointment/appointment.component';
const routes: Routes = [ 
{path:'admin',component:AdiminComponent},
{path:'patient',component:PatientComponent},
{path:'doctor',component:DoctorComponent},
{path: 'patientdetails/:patientId',component: PatientDetailsComponent},
{path:'appointment/:patientId', component:AppointmentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
