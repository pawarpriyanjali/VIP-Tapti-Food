import { Component, OnInit } from '@angular/core';
import { TaptiBhojnalayFood } from './tapti-bhojnalay-food';
import { Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-tapti-bhojnalay',
  templateUrl: './tapti-bhojnalay.component.html',
  styleUrls: ['./tapti-bhojnalay.component.css']
})
export class TaptiBhojnalayComponent implements OnInit {
  alooDalGobhiChanaName: any = [];
  foodRs: any = [];
  imageArray: Array<string> = [];

  paneerSevName: any = [];
  paneerRs: any = [];
  imageArrayForPaneer: Array<string> = [];
  searchArray: Array<string> = [];
  searchArrayIndex: any;
  searchArrayImage: Array<string> = [];
  searchFlag: boolean = false;
  searchRs: any = [];
  addFoodFlag: any;
  countCart:any=0;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    
    this.userService.senddFlagToBanner('tapti-bhojnalay');
    this.userService.senddFlagToNavbar('tapti-bhojnalay');
    this.addFoodFlag = 0;
    var foodNameObject = {};
    var foodValue = ['Dal Shadi', 'Dal Jeera', 'Dal Fry', 'Dal Tadka', 'Dal Ghee', 'Dal Mughlai', 'Dal Makhani Turai', 'Dal Roast', 'Aloo Gobhi', 'Aloo Palak',
      'Aloo Matar', 'Aloo Jeera', 'Gobhi Matar', 'Palak Matar', 'Gobhi Tamatar', 'Matar Tamatar', 'Chhole Tamatar', 'Aloo Gobhi Tamatar', 'Tamatar Chatni', 'Gobhi Masala', 'Aloo Masala', 'Chana Masala', 'Baigan Bharta'];
    var foodRslocal = ['60', '70', '70', '80', '100', '100', '100', '110', '80', '80', '80', '80', '80', '80', '80', '80', '80', '90', '90', '90', '90', '90', '90'];
    for (let index = 0; index < foodValue.length; index++) {
      this.imageArray[index] = "assets/images/" + foodValue[index] + ".jpg";
    }
    this.alooDalGobhiChanaName = foodValue;
    this.foodRs = foodRslocal;

    //For Paneer
    var paneerObject = {};
    var paneerValue = ['Tapti Paneer', 'Dahi Kadhi', 'Sev Tamatar', 'Sev Masala', 'Sev Bhaji', 'Sev Paneer', 'Mix Veg', 'Palak Paneer', 'Matar Paneer', 'Aloo Paneer', 'Dam Aloo', 'Dam Tamatar', 'Kadai Paneer'
      , 'Masala Paneer', 'Shahi Paneer', 'Butter Paneer Masala', 'Paneer Tikka', 'Bhurji Paneer', 'Paneer Pasinda', 'Malai Kofta', 'Kaju Paneer', 'Kaju Kari', 'Singapuri Paneer'];
    var paneerRslocal = ['160', '80', '90', '90', '90', '120', '120', '120', '120', '120',
      '120', '120', '140', '140', '140', '150', '150', '150', '150', '150', '150', '150', '150'];
    for (let index = 0; index < paneerValue.length; index++) {
      this.imageArrayForPaneer[index] = "assets/images/" + paneerValue[index] + ".jpg";
    }
    this.paneerSevName = paneerValue;
    this.paneerRs = paneerRslocal;
    this.userService.searchValue.subscribe(data => {
      if(data!='searchValue')
      {
        this.search(data);
      } 
    });
  }

  search(searchValue) {
    console.log(searchValue)
    this.searchArray = [];
    if (searchValue == "") {
      this.searchFlag = false;
    }
    this.searchFlag = true;
    this.searchArrayIndex = 0;
    for (let index = 0; index < this.paneerSevName.length; index++) {
      if (this.paneerSevName[index].toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        this.searchArray[this.searchArrayIndex] = this.paneerSevName[index];
        this.searchArrayImage[this.searchArrayIndex] = "assets/images/" + this.paneerSevName[index] + ".jpg";
        this.searchRs[this.searchArrayIndex] = this.paneerRs[index];
        this.searchArrayIndex++;
      }
    }
    for (let index = 0; index < this.alooDalGobhiChanaName.length; index++) {
      if (this.alooDalGobhiChanaName[index].toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
        this.searchArray[this.searchArrayIndex] = this.alooDalGobhiChanaName[index];
        this.searchArrayImage[this.searchArrayIndex] = "assets/images/" + this.alooDalGobhiChanaName[index] + ".jpg";
        this.searchRs[this.searchArrayIndex] = this.foodRs[index];
        this.searchArrayIndex++;
      }
    }
  }

  addFood(foodName, foodRs) {
    // localStorage.setItem('data',"")
    // sessionStorage.clear()
    if (foodName != null || foodName != "") {
      this.countCart++;
      if (localStorage.getItem('data') == "") {
        localStorage.setItem('data', localStorage.getItem('data') + foodName+"$"+foodRs)
      }
      else {
        localStorage.setItem('data', localStorage.getItem('data') + "," + foodName+"$"+foodRs)
      }
    }
    this.userService.sendFoodNameToOtherComponent(localStorage.getItem('data'));
  }
}
