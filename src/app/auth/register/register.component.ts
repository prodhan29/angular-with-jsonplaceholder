import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  confirmPassword: string;
  user: any = {
    email: '',
    password: '',
  };
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  createAccount() {

    if (this.user.password === this.confirmPassword) {
      this.authService.doRegister(this.user)
        .then(response => console.log(response))
        .catch(error => console.log(error));

    } else {
      alert('password do not match');
    }
  }

}
