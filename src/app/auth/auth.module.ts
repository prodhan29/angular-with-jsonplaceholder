import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {AngularFireAuthModule} from "@angular/fire/auth";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AngularFireAuthModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
