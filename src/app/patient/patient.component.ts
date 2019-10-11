import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patientArray;

  constructor(public serviceService: TaskService) {
    this.patientArray = this.serviceService.newDuties();
   }

  edittask(sickpatient) {
    this.serviceService.edittask(sickpatient);
  }

  remove(sickpatient) {
    this.serviceService.remove(sickpatient);
  }

  ngOnInit() {
  }

}
