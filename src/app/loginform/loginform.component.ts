import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  
  username:string;
  password:string;
  constructor(private formBuilder: FormBuilder, private router: Router, private  productservice:ProductService) { }

  ngOnInit(): void {
  }

  

  login()
  {
    console.log("in login method");
    const loginPayload = {
      username: this.username,
      password: this.password
  }
  
    this.productservice.login(loginPayload).subscribe(data => {
   
      if(data.result.token!==null) {
    alert("success");
  
      window.localStorage.setItem('token', data.result.token);
        window.localStorage.setItem('id', data.result.buyerid);
        window.localStorage.setItem('username', data.result.username);
     console.log(data.result.token);
   
        this.router.navigate(['homepage']);
      }else {
        
        alert("incorrectPasword");
      }
    });
  }
}



  

  

