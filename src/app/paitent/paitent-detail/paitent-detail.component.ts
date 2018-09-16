import { Component, OnInit } from '@angular/core';
import { PaitentService } from '../../paitent.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-paitent-detail',
  templateUrl: './paitent-detail.component.html',
  styleUrls: ['./paitent-detail.component.css']
})
export class PaitentDetailComponent implements OnInit {

  patient: any;

  constructor(
    private patientService: PaitentService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('key');
    console.log(patientId);
    this.patient = this.patientService.getPatientByKey(patientId);
  }

  updatePatient() {
    this.patientService.updatePatient(this.patient);
    this.location.back();
  }

}
