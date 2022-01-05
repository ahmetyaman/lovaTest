import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/globalserv/alertify.service';

import { UserService } from 'src/app/services/localserv/user.service';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-user-operation',
  templateUrl: './user-operation.component.html',
  styleUrls: ['./user-operation.component.css'],
  providers: [UserService],
})
export class UserOperationComponent implements OnInit {
  constructor(
    private userService: UserService,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUsers();
  }
  filterText="";
  users: User[] = [];

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  OnDelete(user: User) {
    let sure = this.alertifyService.confirm(
      'Are you sure about this operation ?'
    );
    console.log('sure :' + JSON.stringify(sure));
    if (sure === true) {
      this.userService.deleteUser(user).subscribe((data) => {
        console.log('deleted user: ' + JSON.stringify(data));
        this.getUsers();
      });
    }
  }

  OnEdit(user: User) {
    this.router.navigateByUrl('user-record/user/' + user.id.toString());
  }

  OnRecord() {

 

 this.router.navigateByUrl('user-record');
  }
}
