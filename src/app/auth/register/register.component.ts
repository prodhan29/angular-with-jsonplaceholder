import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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
  constructor(
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  createAccount() {

    if (this.user.password === this.confirmPassword) {
      this.authService.doRegister(this.user)
        .then(response => this.router.navigate(['/login']))
        .catch(error => alert(error.message));

    } else {
      alert('password do not match');
    }
  }

}
