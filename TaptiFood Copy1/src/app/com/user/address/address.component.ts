import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  nameArray0: Array<string> = [];
  emailArray1: Array<string> = [];
  addressArray2: Array<string> = [];
  cityArray3: Array<string> = [];
  stateArray4: Array<string> = [];
  zipArray5: Array<string> = [];
  userIdArray6: Array<string> = [];
  splittedArrayFromCart: Array<string> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.senddFlagToBanner('address');
    this.splittedArrayFromCart = localStorage.getItem('addressArrayFromCart').split(",");
    this.nameArray0[this.nameArray0.length] = this.splittedArrayFromCart[0];
    this.emailArray1[this.emailArray1.length] = this.splittedArrayFromCart[1];
    this.addressArray2[this.addressArray2.length] = this.splittedArrayFromCart[2];
    this.cityArray3[this.cityArray3.length] = this.splittedArrayFromCart[3];
    this.stateArray4[this.stateArray4.length] = this.splittedArrayFromCart[4];
    this.zipArray5[this.zipArray5.length] = this.splittedArrayFromCart[5];
    console.log(this.nameArray0)

    if (this.nameArray0.length > 0) {
      localStorage.setItem('nameArray0', localStorage.getItem('nameArray0') + "," + JSON.stringify(this.nameArray0[this.nameArray0.length]));
      localStorage.setItem('emailArray1', localStorage.getItem('emailArray1') + "," + JSON.stringify(this.emailArray1[this.emailArray1.length]));
      localStorage.setItem('addressArray2', localStorage.getItem('addressArray2') + "," + JSON.stringify(this.addressArray2[this.addressArray2.length]));
      localStorage.setItem('cityArray3', localStorage.getItem('cityArray3') + "," + JSON.stringify(this.cityArray3[this.cityArray3.length]));
      localStorage.setItem('stateArray4', localStorage.getItem('stateArray4') + "," + JSON.stringify(this.stateArray4[this.stateArray4.length]));
      localStorage.setItem('zipArray5', localStorage.getItem('zipArray5') + "," + JSON.stringify(this.zipArray5[this.zipArray5.length]));
    }
    else {
      localStorage.setItem('nameArray0', JSON.stringify(this.nameArray0[this.nameArray0.length]));
      localStorage.setItem('emailArray1', JSON.stringify(this.emailArray1[this.emailArray1.length]));
      localStorage.setItem('addressArray2', JSON.stringify(this.addressArray2[this.addressArray2.length]));
      localStorage.setItem('cityArray3', JSON.stringify(this.cityArray3[this.cityArray3.length]));
      localStorage.setItem('stateArray4', JSON.stringify(this.stateArray4[this.stateArray4.length]));
      localStorage.setItem('zipArray5', JSON.stringify(this.zipArray5[this.zipArray5.length]));
    }
    console.log(localStorage.getItem('nameArray0'));
  }
}
