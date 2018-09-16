import { Component, OnInit } from '@angular/core';
import {PaitentService} from '../../paitent.service';

@Component({
  selector: 'app-paitent-list',
  templateUrl: './paitent-list.component.html',
  styleUrls: ['./paitent-list.component.css']
})
export class PaitentListComponent implements OnInit {

  patientList: any = [];

  constructor(private patientService: PaitentService) { }

  ngOnInit() {
       this.patientService.getPatient( patients =>  this.patientList = patients);
  }

  delete (patient: any) {
    this.patientService.deletePatient(patient.key);
  }

  edit (patient: any) {
    console.log(patient);
  }

}
