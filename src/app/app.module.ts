import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule} from './app-routing.module';
import { CommentsComponent } from './comments/comments.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';
import { PaitentModule} from './paitent/paitent.module';
import { AuthModule } from './auth/auth.module';
import {AngularFirestoreModule} from "@angular/fire/firestore";
import {AngularFireAuthModule} from "@angular/fire/auth";


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    CommentsComponent,
    CreatePostComponent,
    DeletePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PaitentModule,
    AuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
