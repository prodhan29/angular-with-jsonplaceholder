import { Component, OnInit } from '@angular/core';
import {PaitentService} from '../../paitent.service';
import * as firebase from 'firebase/app';

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

  signout() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }



}
