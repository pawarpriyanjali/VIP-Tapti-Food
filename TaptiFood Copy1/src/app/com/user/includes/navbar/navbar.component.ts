import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }
  navbarFlag:any;
  ngOnInit() {
    this.userService.nabarflag.subscribe(data=>
      {
        this.navbarFlag=data;
      });
  }

}
