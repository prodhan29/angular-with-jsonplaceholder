import { NgModule } from '@angular/core';
import { PostComponent} from './post/post.component';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PaitentListComponent } from './paitent/paitent-list/paitent-list.component';
import { PaitentCreateComponent} from './paitent/paitent-create/paitent-create.component';
import { PaitentDetailComponent} from './paitent/paitent-detail/paitent-detail.component';
import { LoginComponent} from './auth/login/login.component';
import { RegisterComponent} from './auth/register/register.component';
import { AuthGuard } from "./authguard.service";

const routes: Routes = [
  { path: '', redirectTo: '/patients', pathMatch: 'full'},
  { path: 'posts', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'posts/:id/comments', component: CommentsComponent, canActivate: [AuthGuard]},
  { path: 'posts/create', component: CreatePostComponent, canActivate: [AuthGuard]},
  { path: 'patients', component: PaitentListComponent, canActivate: [AuthGuard]},
  { path: 'patient/create', component: PaitentCreateComponent, canActivate: [AuthGuard]},
  { path: 'patient/:key', component: PaitentDetailComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: RegisterComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
