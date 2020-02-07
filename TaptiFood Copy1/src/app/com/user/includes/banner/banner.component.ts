import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerFlag:any="";
  cartSumPrice: any = 0;
  cartSumDelivery: any = 0;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.bannerFlag.subscribe(data=>
      {
        this.bannerFlag=data;
      });

    
  }

}
