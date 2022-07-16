import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Item } from '../Item';
import { Router, ActivatedRoute } from '@angular/router';
import { Cart } from '../Cart';
import { TransactionEntity } from '../transaction';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private dataservice:ProductService,private router: Router,private route: ActivatedRoute,private ps:ProductService) { }
item:Item = new Item();
id:number;
cart:Cart = new Cart();
itemquantity:number=1;

transactionreturn:TransactionEntity;
transaction:TransactionEntity=new TransactionEntity();

buyerid:any;



  ngOnInit(): void {
  
    this.id = this.route.snapshot.params['id'];

    this.dataservice.getitembyid(this.id).subscribe(item=>{
              console.log(item)
              this.item=item;
            }, error => console.log(error));
           
  }
 
 
insertintocart()
{
  this.buyerid=localStorage.getItem("id");
  console.log(this.buyerid);
  console.log("insertintocart");
  this.cart.itemId=this.item.itemid;
  this.cart.price=this.item.itemCost;
  this.cart.description=this.item.itemDescription;
  this.cart.noOfItems=this.itemquantity;
  this.cart.itemName=this.item.itemName;
 
this.dataservice.addTocart(this.buyerid,this.cart).subscribe(cart=>{
                                                         this.cart=cart
                                                         });
                                                       window.location.reload();
                                                      
}
  

checkout()
{
  this.buyerid=localStorage.getItem("id");
  console.log(this.buyerid);
  console.log("insertintocart");
  this.cart.itemId=this.item.itemid;
  this.cart.price=this.item.itemCost;
  this.cart.description=this.item.itemDescription;
  this.cart.noOfItems=this.itemquantity;
  this.cart.itemName=this.item.itemName;
 
this.dataservice.addTocart(this.buyerid,this.cart).subscribe(cart=>{
                                                         this.cart=cart
                                                         });

                                                         this.router.navigate(['gototransaction'])
                                                      //  window.location.reload();
                                                      

}
}
