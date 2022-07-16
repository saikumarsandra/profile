import { Component, OnInit } from '@angular/core';
import { Cart } from '../Cart';
import { ProductService } from '../product.service';
import { Item } from '../Item';
import { ViewCart } from '../ViewCart';

import { TransactionEntity } from '../transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-cart',
  templateUrl: './display-cart.component.html',
  styleUrls: ['./display-cart.component.css']
})
export class DisplayCartComponent implements OnInit {

  constructor(private cartserv:ProductService,private router:Router) { }
item:Item[];
  cart: Cart[];
  view:ViewCart =new ViewCart();
i:any;
cost:number;
total = 0;
id=1;
buyerid:any;


  ngOnInit(): void {

    this.reloading();
   
      
  }
  

  reloading()
  {

    this.buyerid=localStorage.getItem("id");
 
    this.cartserv.getcartitems(this.buyerid).subscribe(cart=>{
      this.cart=cart;
     
    
    }); 
   
  }
  
  delete(i:number)
  {
    console.log("delete method"+i);
this.cartserv.deletecartitem(i).subscribe(I=>this.i=i,I=>{alert("Item is deleted."),

this.reloading();

});
 
  }

  checkout()
  {
   
   this.router.navigate(['gototransaction'])
 


  }

  increase(cart1:ViewCart)
  {

   
 this.cost=cart1.price;
    cart1.noOfItems+=1
    if(cart1.noOfItems!=1)
    {
    
      cart1.price=this.cost*cart1.noOfItems;

    console.log(cart1.itemId,cart1.noOfItems,cart1.price);
    
    this.cartserv.updateCartItem(cart1).subscribe(newview=>this.view=newview);
 
    }

  }
  decrease(cart1:ViewCart)
  {
  
    this.cost=cart1.price
    if(cart1.noOfItems!=1)
    {
    cart1.noOfItems-=1;
   
   cart1.price=this.cost*cart1.noOfItems;
    console.log(cart1.cartId,cart1.itemId,cart1.noOfItems);
    
    this.cartserv.updateCartItem(cart1).subscribe(newview=>this.view=newview);
    }

  }


}
