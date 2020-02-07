import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount: any = 0;
  restaurantsName: string = "tapti bhojnalay";
  cartValue:any=0;

  constructor(private router: Router, private userService: UserService) {
  }

  ngOnInit() {

    this.cartValue = localStorage.getItem('data').split(",");
    if (this.cartValue[0].split("$")[0] != "null") {
      this.cartCount=this.cartValue.length;
    }
    else
    {
      this.cartCount=this.cartValue.length-1;
    }

  }

  cart() {
    this.router.navigate(['/cart']);
  }

  search(searchInput)
  {
    this.userService.sendSearchValue(searchInput.value);
    this.router.navigate(['hotel/'+this.restaurantsName]);
  }

}


