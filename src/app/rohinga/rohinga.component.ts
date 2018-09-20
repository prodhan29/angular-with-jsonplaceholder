import { Component, OnInit } from '@angular/core';
import {RohingaService} from "../rohinga.service";

import * as firebase from 'firebase/app';
import {LocalStorage} from "@ngx-pwa/local-storage";

@Component({
  selector: 'app-rohinga',
  templateUrl: './rohinga.component.html',
  styleUrls: ['./rohinga.component.css']
})
export class RohingaComponent implements OnInit {

  rohingas: any = [];
  rohingaName: string;

	constructor(
		public rohingaService: RohingaService,
		public localStorage: LocalStorage) { }

	ngOnInit() {

		this.rohingaService.getRohingaList().subscribe( data => this.rohingas = data);
	}

    createRohinga() {

		let rohinga = {
            name: this.rohingaName,
            age: Math.floor( Math.random() * 50)
        };

		this.rohingaService.createRohinga(rohinga).then((response)=> {
			console.log(response);
		}).catch((error) => console.log(error));
	}

    deleteRohinga(id) {
        this.rohingaService.deleteRohinga(id);
	}


	uploadRohingaUsers(files: FileList) {

		console.log(files);
		if(files && files.length > 0) {
			let file : File = files.item(0);
			console.log(file.name);
			console.log(file.size);
			console.log(file.type);
			let reader: FileReader = new FileReader();
			reader.readAsText(file);

			reader.onload = (e) => {
				let csv: any = reader.result.split("\n");
				console.log('csv data ', 'the size: ' + csv.length , csv[1].split(','));

				let testData = [];
				for(let i=0; i<10; i++) {
					testData.push(csv);
				}

				this.localStorage.setItem('rohingya', testData).subscribe(() => {
					console.log("successfully saved");
				});
			}
		}
	}

	getFromLocalStorage() {
		this.localStorage.getItem('rohingya').subscribe((rohinga) => {
			console.log(rohinga);
		});
	}

}
