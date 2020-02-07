import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private http:HttpClient) { }

  // setLoggedInTrue(isLoggedin : string){
  //   localStorage.setItem('isLoggedin',isLoggedin);
  // }


}
