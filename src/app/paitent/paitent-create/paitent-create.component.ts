import { Component, OnInit } from '@angular/core';
import {PaitentService} from '../../paitent.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paitent-create',
  templateUrl: './paitent-create.component.html',
  styleUrls: ['./paitent-create.component.css']
})
export class PaitentCreateComponent implements OnInit {

  patient: any = {
    name: '',
    address: '',
    age: null,
  };

  errorMsg: any = '';

  constructor(
    private patientService: PaitentService,
    private location: Location
  ) {}

  ngOnInit() {}

  createPatient() {

    if (this.checkValidation()) {
      this.patientService.createPatient(this.patient);
      this.location.back();
    }

  }

  checkValidation() {
    if (this.patient.name === null || this.patient.name === '') {
      this.errorMsg = 'name can not be empty';
      return false;
    }
    if (this.patient.age === null || this.patient.age < 1) {
      this.errorMsg = 'age is not valid';
      return false;
    }
    return true;
  }

}
