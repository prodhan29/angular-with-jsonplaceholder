import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(private http: HttpClient) { }

  getComments(id: string) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  }
}
