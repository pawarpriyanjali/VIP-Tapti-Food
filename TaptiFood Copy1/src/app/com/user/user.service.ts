import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  private comptransfer = new BehaviorSubject("food");
  foodName = this.comptransfer.asObservable();

  sendFoodNameToOtherComponent(value) {
    this.comptransfer.next(value);
  }

  private comptransferForBanner = new BehaviorSubject('banner');
  bannerFlag = this.comptransferForBanner.asObservable();

  senddFlagToBanner(value1) {
    this.comptransferForBanner.next(value1);
  }

  private comptransferForNavbar = new BehaviorSubject('navbar');
  nabarflag = this.comptransferForNavbar.asObservable();

  senddFlagToNavbar(value1) {
    this.comptransferForNavbar.next(value1);
  }

  private transferPriceToBanner = new BehaviorSubject('price');
  price = this.transferPriceToBanner.asObservable();

  sendPrice(value2) {
    this.transferPriceToBanner.next(value2);
  }

  private transferDeliveryPriceToBanner = new BehaviorSubject('price');
  deliveryPrice = this.transferDeliveryPriceToBanner.asObservable();

  sendDeliveryPrice(value3) {
    this.transferDeliveryPriceToBanner.next(value3);
  }

  private transferTotalPriceToBanner = new BehaviorSubject('price');
  totalPrice = this.transferTotalPriceToBanner.asObservable();

  sendTotalPrice(value4) {
    this.transferTotalPriceToBanner.next(value4);
  }

  private transferSearchValue = new BehaviorSubject('searchValue');
  searchValue = this.transferSearchValue.asObservable();

  sendSearchValue(value5) {
    this.transferSearchValue.next(value5);
  }

  private transferAddress = new BehaviorSubject('address');
  addressArray = this.transferAddress.asObservable();

  sendAddress(value6) {
    this.transferAddress.next(value6);
  }
}
