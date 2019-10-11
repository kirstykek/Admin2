import { Component, OnInit } from '@angular/core';
import { TaskService } from '../service/task.service';
@Component({
  selector: 'app-adimin',
  templateUrl: './adimin.component.html',
  styleUrls: ['./adimin.component.css']
})
export class AdiminComponent implements OnInit {

  patientArray;

  constructor(public taskService: TaskService) {
    this.patientArray = this.taskService.newDuties();
   }

    newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender) {
      this.taskService.newPatient(Pid, Pname, Psurname, Page, Pphonenumber, Pgender);
    }

    edittask(sickpatient) {
      this.taskService.edittask(sickpatient);
    }

    removetask(sickpatient) {
      this.taskService.removetask(sickpatient);
    }
    getPatientz(patientId) {
      this.taskService.getPatient(patientId);
    }

  ngOnInit() {
  }

}
