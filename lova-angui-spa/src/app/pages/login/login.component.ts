import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/globalserv/auth.service';
import { LoginUser } from 'src/app/services/models/login-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  model: LoginUser = new LoginUser();
  ngOnInit(): void {}

  login(form: NgForm) {
    console.log(this.model.userName);
    console.log(this.model.password);
    console.log(this.authService.login(this.model));
  }
}
