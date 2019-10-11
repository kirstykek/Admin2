import { Component, OnInit } from '@angular/core';
import{TaskService} from '../service/task.service';
import { ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {
  patientArray;
  patientID;

  constructor(public taskService: TaskService, public route: ActivatedRoute) {
    this.patientArray = this.taskService.newDuties();
   }

   edittask(sickpatient) {
    this.taskService.edittask(sickpatient);
  }

  removetask(sickpatient) {
    this.taskService.removetask(sickpatient);
  }

  getPatient(patientId) {
    this.taskService.getPatient(patientId);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.patientID = params.get('patientId');
      this.patientArray = this.taskService.getPatient(this.patientID);
      console.log(this.patientArray);
    });
    console.log(this.patientID);
  }

}