import { Component, OnInit } from '@angular/core';
import { TransactionEntity, TransactionEntity1 } from '../transaction';

import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

buyerid:any;
transactionreturn:TransactionEntity;
transaction:TransactionEntity=new TransactionEntity();

  constructor(private buyerservice:ProductService,public route:Router) { }

  ngOnInit(): void {
   
   
 
  }
  
  chekoutit()
  {
    this.buyerid =localStorage.getItem("id");
    console.log("checout"+this.transaction);
    this.buyerservice.checkout(this.buyerid,this.transaction).subscribe(transaction=>{
      this.transaction=transaction;
      window.location.reload();
      
    });
    this.route.navigate(['order']);
   
  }

  onSubmit()
  {

   this.chekoutit();
  
}
}
