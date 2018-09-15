import { Component, OnInit } from '@angular/core';
import {ItemService} from '../items/shared/item.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  public items: any;

  constructor(private itemSvc: ItemService) { }

  ngOnInit() {
      // get List of items from firebase
      this.items = this.itemSvc.getItemsList().valueChanges().subscribe( items => console.log(items));
      this.itemSvc.createItem();


  }

}
