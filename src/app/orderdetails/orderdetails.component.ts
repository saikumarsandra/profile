import { Component, OnInit } from '@angular/core';
import { PurchaseHistory } from '../model/orderDetails.model';
import { ProductService } from '../product.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {

  feeds:PurchaseHistory[];
  id=1;
  buyerId:any;
  constructor(public auth:AuthenticationService,public service:ProductService) {

    this.buyerId=localStorage.getItem("id");
    this.service.getAllOrdersByUser(this.buyerId).subscribe(data=>{

       this.feeds=data;
       console.log(this.feeds);
      
      });
  
    console.log(this.buyerId);
    
    
   }

  ngOnInit(): void {
    this.buyerId=localStorage.getItem("id");
    this.service.getAllOrdersByUser(this.buyerId).subscribe(data=> this.feeds=data);
  }

}
