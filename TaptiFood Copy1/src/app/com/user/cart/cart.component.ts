import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  splittedFoodNameAndRsArray: any;
  foodNameArray: Array<string> = [];
  foodRsArray: Array<number> = [];
  imageForFood: Array<string> = [];
  myCartCount: any = 0;
  cartSumPrice: any = 0;
  cartSumDelivery: any = 0;

  name: any = "";
  email: any = "";
  address: any = "";
  city: any = "";
  state: any = "";
  zip: any = "";
  addressArray: Array<string> = [];
  user: any = "";
  cartCount: any = 0;
  checkoutDone: any = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.splittedFoodNameAndRsArray = localStorage.getItem('data').split(",");

    for (let index = 0; index < this.splittedFoodNameAndRsArray.length; index++) {
      if (this.splittedFoodNameAndRsArray[index].split("$")[0] != "null") {
        this.foodNameArray[index] = this.splittedFoodNameAndRsArray[index].split("$")[0];
        this.foodRsArray[index] = this.splittedFoodNameAndRsArray[index].split("$")[1];
        var x = this.foodRsArray[index];
        var foodTotalPrice = +x;
        this.cartSumPrice = (+foodTotalPrice)+this.cartSumPrice;
        this.cartCount++;
        console.log(this.cartCount)
      }
    }
    for (let index = 0; index < this.foodNameArray.length; index++) {
      this.imageForFood[index] = "assets/images/" + this.foodNameArray[index] + ".jpg"; 
    }

    this.userService.senddFlagToBanner('cart');
    this.userService.senddFlagToNavbar('cart');
    this.userService.sendPrice(this.cartSumPrice);
    localStorage.setItem('totalPrice', this.cartSumPrice + this.cartSumDelivery)
    this.userService.senddFlagToNavbar(this.cartSumDelivery);
  }

  addAddress(name, email, address, city, state, zip) {
    this.checkoutDone=true;
    localStorage.setItem('addressArrayFromCart', name + "," + email + "," + address + "," + city + "," + state + "," + zip)
    localStorage.setItem('currentArrayOfString', name + "," + email + "," + address + "," + city + "," + state + "," + zip)
    if (localStorage.getItem('previousArrayOfString').toLowerCase().indexOf(localStorage.getItem('currentArrayOfString')) <= -1) {
      localStorage.setItem('previousArrayOfString', localStorage.getItem('previousArrayOfString') + "," + name + "," + email + "," + address + "," + city + "," + state + "," + zip)
    }

    console.log(localStorage.getItem('previousArrayOfString'))
  }
}
