import { NgModule } from '@angular/core';
import { PostComponent} from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostComponent},
  { path: 'posts/:id/comments', component: CommentsComponent},
  { path: 'posts/create', component: CreatePostComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
