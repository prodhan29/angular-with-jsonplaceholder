import { Component, OnInit } from '@angular/core';
import {RohingaService} from "../rohinga.service";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-rohinga',
  templateUrl: './rohinga.component.html',
  styleUrls: ['./rohinga.component.css']
})
export class RohingaComponent implements OnInit {

	constructor(public rohingaService: RohingaService) { }

	ngOnInit() {
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
			}
		}
	}

}
