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

	createRohinga(rohingya) {
  		return new Promise((resolve, reject) => {
			this.rohingaCollection
				.add(rohingya)
				.then(resolve)
				.catch(resolve);
		});
	}

	updateRohinga(docId, rohingya) {
  		// return new Promise((resolve, reject) => {
		// 	this.rohingaCollection
		// 		.doc(docId)
		// 		.set(rohingya)
		// 		.then(resolve)
		// 		.catch(reject);
		// });
	}

}
