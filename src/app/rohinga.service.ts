import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable, of} from "rxjs/index";


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

    getRohingaList(): Observable<any> {

        return new Observable((observer) => {
            this.rohingaCollection.snapshotChanges().subscribe( rohingas => {

                let data = [];
                rohingas.forEach((r: any) => {
                    console.log(r.payload.doc.id, r.payload.doc.data());
                    data.push({ id: r.payload.doc.id, ...r.payload.doc.data()});
                });
                observer.next(data);
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
                .catch(reject);
        });
    }

    deleteRohinga(id) {
        return new Promise((resolve, reject) => {
            this.rohingaCollection.doc(id).delete().then( r => console.log('successfully deleted'));
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
