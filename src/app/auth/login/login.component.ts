import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {Observable, of} from 'rxjs/index';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg: string ;
  user: any = {
    email: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  tryLogin() {

    if (this.checkValidation()) {
      this.authService.doLogin(this.user)
        .then((response) => this.router.navigate(['/patients']))
        .catch( error => this.errorMsg = error.message);
    }
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(response =>  this.router.navigate(['/patients']))
      .catch((error) => console.log(error));
  }


  checkValidation() {

    if (this.user.email === '' || this.user.password === '') {
      this.errorMsg = ' email or password field is blank';
      return false;
    }
    return true;
  }
}
