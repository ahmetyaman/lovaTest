import { Injectable } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { AlertifyService } from './alertify.service';
import { ServConfig } from '../servconfig';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private alertifyService: AlertifyService,private router:Router) {}

  path = ServConfig.ApiPath + '/users';

  TOKEN_KEY = 'token';

  login(loginUser: LoginUser) {
    if (loginUser.userName == 'ahmet' && loginUser.password == '123') {
      this.saveToken(loginUser.userName);
      this.router.navigateByUrl("/user-operation")
      this.alertifyService.success('You logged in ');
    }
  }

  saveToken(token: any) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.alertifyService.warning('You logged Out ');
    this.router.navigateByUrl("/login");
  }
  loggedIn() {
    return this.token == undefined ? false : true;
  }
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get currentUserId() {
    return null;
  }
}
