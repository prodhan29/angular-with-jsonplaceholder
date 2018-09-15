import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {FirebaseListObservable, FirebaseObjectObservable} from '@angular/fire/database-deprecated';
import {Item} from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private basePath: any = '/items';

  constructor(private db: AngularFireDatabase) { }

  getItemsList() {
      return this.db.list(this.basePath);
  }

  createItem() {
    const itemsRef = this.db.list('/items');
    console.log(itemsRef);
    itemsRef.push({apple: 'macbookPro'});
  }

  //
  // // Return a single observable item
  // getItem(key: string): FirebaseObjectObservable<Item> {
  //     const itemPath =  `${this.basePath}/${key}`;
  //     this.item = this.db.object(itemPath);
  //     return this.item;
  // }
  //
  // createItem(item: Item): void  {
  //   this.items.push(item)
  //     .catch(error => this.handleError(error));
  // }
  //
  //
  // // Update an existing item
  // updateItem(key: string, value: any): void {
  //   this.items.update(key, value)
  //     .catch(error => this.handleError(error));
  // }
  //
  // // Deletes a single item
  // deleteItem(key: string): void {
  //   this.items.remove(key)
  //     .catch(error => this.handleError(error));
  // }
  //
  // // Deletes the entire list of items
  // deleteAll(): void {
  //   this.items.remove()
  //     .catch(error => this.handleError(error));
  // }
  //
  // // Default error handling for all actions
  // private handleError(error): void {
  //   console.log(error);
  // }












}
