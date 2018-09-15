import { NgModule } from '@angular/core';
import { PostComponent} from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ItemsListComponent} from './items-list/items-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full'},
  { path: 'posts', component: PostComponent},
  { path: 'posts/:id/comments', component: CommentsComponent},
  { path: 'posts/create', component: CreatePostComponent},
  { path: 'firebase/items', component: ItemsListComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
