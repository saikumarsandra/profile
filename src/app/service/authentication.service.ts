import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public http : HttpClient) { }
  getUserDetails():string{
    let user = localStorage.getItem('username');
    return user;
  }

  getBuyerId():string{
    let user = localStorage.getItem('id');
    return user;
  }
  isUserLoggedIn(): boolean{
    // check if sessionStorage contains key 'user'
    let user = localStorage.getItem('username');
    if(user == null)
      return false;
    return true;  
  }
}
