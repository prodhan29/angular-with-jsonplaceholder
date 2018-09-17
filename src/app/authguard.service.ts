import { Injectable } from '@angular/core';
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { UserService } from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    private router: Router,
    private userService: UserService
  ) {}

  canActivate(): Promise<boolean> {
    return new Promise((resolve, reject) => {

      this.userService.getCurrentUser()
        .then(user => {
          console.log(user);
          return resolve(true);
        }, err => {
          console.log(err);
          this.router.navigate(['/login']);
          return resolve(false);

        });
    });
  }
}
