import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaitentService {

  private basePath = '/patients'
  private patientRef: any;
  private patientList: any;

  constructor(private db: AngularFireDatabase) {
    this.patientRef = this.db.list(this.basePath);
  }

  getPatient(setPatients) {

      return this.patientRef.snapshotChanges().pipe(
        map(changes => {
          if (changes instanceof Array) {
             return changes.map( c => ({ ...c.payload.val(), key: c.payload.key  }));
          }
        })
      ).subscribe( p => {
        console.log(p);
        this.patientList = p;
        setPatients(p);
      });
  }

  createPatient(patient: any) {
    this.patientRef.push(patient);
  }

  updatePatient(patient: any) {
    console.log(patient);
    this.patientRef.update(patient.key, patient);
  }

  deletePatient(id: string) {
    this.patientRef.remove(id);
  }

  getPatientByKey(key: string) {
    return this.patientList.find( p => p.key === key);
  }
}
