import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";


@Injectable({
  providedIn: 'root'
})
export class RohingaService {

	rohingaCollection: AngularFirestoreCollection<any>;

	private rohingaDoc: AngularFirestoreDocument<any>;

  	constructor(firestore: AngularFirestore) {
		this.rohingaCollection = firestore.collection('rohinga');
		this.getRohingaList();
	}

	getRohingaList() {
		this.rohingaCollection.snapshotChanges().subscribe((rohingas) => {
			let data = [];
			rohingas.forEach((r: any) => {
				console.log( r.payload.doc.id, r.payload.doc.data());
			});
		});
	}

	getRohinga() {

	}

	createRohinga() {
		this.rohingaCollection.add({
			name: 'habib munshi',
			age: 26,
			gender: 'male'
		})
	}

	updateRohinga() {

  		console.log('updating');
		let docId = '2Zl8147VpSqSK9T9e3B9';
		this.rohingaCollection.doc(docId).set({
			name: 'yasin Arafat',
			age: 28,
			homeAddress: 'jessore'
		})
	}

}
