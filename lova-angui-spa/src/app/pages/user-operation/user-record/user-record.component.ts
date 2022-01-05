import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/globalserv/alertify.service';
import { UserService } from 'src/app/services/localserv/user.service';
import { User } from 'src/app/services/models/user';

@Component({
  selector: 'app-user-record',
  templateUrl: './user-record.component.html',
  styleUrls: ['./user-record.component.css'],
  providers: [UserService],
})
export class UserRecordComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private router: Router
  ) {}

  user: User = new User();
  recordForm: FormGroup;
  Id: undefined;
  ngOnInit(): void {
    this.createRecordForm();

    this.activatedRoute.params.subscribe((param) => {
      this.Id = param['Id'];
      if (this.Id != undefined) {
        this.userService.getUserById(param['Id']).subscribe((data) => {
          this.user = data;

          this.recordForm.setValue({
            userName: this.user.userName,
            password: this.user.password,
          });
        });
      }
    });
  }

  createRecordForm() {
    return (this.recordForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    }));
  }

  save() {
    if (this.recordForm.valid) {
      if (this.Id != undefined) {
        this.user = Object.assign({}, this.recordForm.value);
        this.user.id = this.Id;
        this.userService.updateUser(this.user).subscribe((data) => {
          this.alertifyService.success(
            'Updated : ' + data.userName + ' ' + data.password
          );
          this.router.navigateByUrl('user-operation');
        });
      } else {
        this.user = Object.assign({}, this.recordForm.value);
        this.userService.addUser(this.user).subscribe((data) => {
          this.alertifyService.success(
            'Recorded : ' + data.userName + ' ' + data.password
          );
          this.router.navigateByUrl('user-operation');
        });
      }
    }
  }
}
