import { Injectable } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {PatientDetailsComponent} from './../patient-details/patient-details.component';
import { isIdentifier } from '@angular/compiler';
import {AppointmentComponent} from './../appointment/appointment.component';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  patient = [];
  appointments= [];

  Pid: string;
  Pname: string;
  Psurname: string;
  Page: string;
  PphoneNumber: string;
  Pgender: string;

  APDate: string;
  APReason: string;
  APDocter: string;

  constructor() { }

newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender) {
  this.patient.push({
    patientId: Pid,
    patientName : Pname,
    patientSurname : Psurname,
    patientAge : Page,
    patientPhoneNumber : Pphonenumber,
    patientGender : Pgender,
  });
  this.Pid = '';
  this.Pname = '';
  this.Psurname = '';
  this.Page = '';
  this.PphoneNumber = '';
  this.Pgender = '';
}

appointmentdate(patId,APDate, APreason, APdocter) {
  this.appointments.push({
    patientId: patId,
    apDate: APDate,
    apReason: APreason,
    apDocter: APdocter,
  });
  console.log( this.appointments);
  
  this.APDate = '';
  this.APReason = '';
  this.APDocter = '';
}

removeappointment(sick) {
  const index = this.appointments.indexOf(sick);
  this.appointments.splice(index, 1);
  if (this.appointments.length <= 0) {
  }
}


 removetask(sickpatient) {
   const index = this.patient.indexOf(sickpatient);
   this.patient.splice(index, 1);
   if (this.patient.length <= 0) {
   }
   
 }

 
 edittask(sickpatient) {
   const index = this.patient.indexOf(sickpatient);
   const newzid = prompt('edit ID', sickpatient.patientId);
   const newzname = prompt('edit Name', sickpatient.patientName);
   const newzsurname = prompt('edit Surnmae', sickpatient.patientSurname);
   const newzage = prompt('edit Age', sickpatient.patientAge);
   const newzphonenumber = prompt('edit Phone Number', sickpatient.patientPhoneNumber);
   const newzgender = prompt('edit Gender', sickpatient.patientGender);
   if (newzid != null || newzname != null || newzsurname != null || newzage != null || newzphonenumber != null || newzgender != null) {
   this.patient[index].patientId = newzid;
   this.patient[index].patientName = newzname;
   this.patient[index].patientSurname = newzsurname;
   this.patient[index].patientAge = newzage;
   this.patient[index].newzphonenumber = newzage;
   this.patient[index].newzgender = newzage;
   }
 }

newDuties() {
  return this.patient;
}
editappointment(sick) {
  const index = this.appointments.indexOf(sick);
  const newzzDate = prompt('edit Date', sick.apDate);
  const newzzReason = prompt('edit Reason', sick.apReason);
  const newzzDocter = prompt('update Docter', sick.apDocter);
  if (newzzDate != null || newzzReason != null || newzzDocter != null) {
    this.appointments[index].apDate = newzzDate;
    this.appointments[index].apDate = newzzReason;
    this.appointments[index].apDate = newzzDocter;
  }

  }

  getPatient(patientId) {
 for (let i = 0; i => this.patient.length; i++) {
   if (this.patient[i].patientId  === patientId) {
     return this.patient[i];
  }
 }
 {
  let selectedPatient=[]
  this.patient.forEach(sickpatient =>
     {
       if (sickpatient.patientId == patientId)
      {
      selectedPatient=sickpatient
      }
    })
  
  return selectedPatient
  }



 
}
getAppointments(patientId) {

  let selectedAppointment=[]

  this.appointments.forEach(sick =>
  {
    if (sick.patientId == patientId)
    {
     selectedAppointment.push(sick)
    }
})


  return selectedAppointment
    }



newDutiezAppoint() {
  return this.appointments;
}


remove(sickpatient) {
  const index = this.patient.indexOf(sickpatient);
  this.patient.splice(index, 1);
  if (this.patient.length <= 0) {
  }
}}
