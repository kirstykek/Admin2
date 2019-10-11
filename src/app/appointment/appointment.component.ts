import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  
  patientArray;
  appointments;
  patientID;

  constructor(public taskService: TaskService, public route: ActivatedRoute) {
    this.patientArray = this.taskService.newDuties();
  
  }

  appointmentdate(APDate,  APReason,APDocter) {
    this.taskService.appointmentdate(this.patientID,APDate,APReason,APDocter);
   this.getPatientz(this.patientID)

  }

   getPatientz(patientId) {
     this.appointments = this.taskService.getAppointments(patientId)

  }

  removeappointment(sick) {
    this.taskService.removeappointment(sick);
  }

  editappointment(sick) {
    this.taskService.editappointment(sick);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientID = params.get('patientId');
      this.appointments = this.taskService.getAppointments(this.patientID)
    });

  }

}
