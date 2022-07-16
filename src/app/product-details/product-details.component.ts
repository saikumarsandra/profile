import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../Item';
import { Cart } from '../Cart';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private service:ProductService, public router: Router) { }

  id:any;
  itemquantity:number=1;
  @Input() item:Item;
  cart:Cart = new Cart();
  ngOnInit(): void {
    this.reload;
  }

  onSave()
  {

    this.id=localStorage.getItem("id");
    console.log(this.id);
  console.log("onsave");
    this.cart.itemId=this.item.itemid;
    this.cart.price=this.item.itemCost;
    this.cart.description=this.item.itemName;
    this.cart.noOfItems=this.itemquantity;
 this.service.addTocart(this.id,this.cart).subscribe(cart=> this.cart=cart);
 
 this.router.navigate(['homepage']);

  }
  reload(){
    window.location.reload();
  }
}
