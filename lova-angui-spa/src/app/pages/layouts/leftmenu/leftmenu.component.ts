import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/globalserv/auth.service';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }
logOut()
{
  this.authService.logOut();

}
isLoggedIn()
{
 return this.authService.loggedIn();
}
}
