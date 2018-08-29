import { ActivatedRoute} from '@angular/router';
import { Location} from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CommentService} from '../comment.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  comments: any = [];

  constructor(
    private data: CommentService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    const postId = this.route.snapshot.paramMap.get('id');
    this.data.getComments(postId).subscribe( data => this.comments = data);
  }

  goBack() {
    this.location.back();
  }
}
