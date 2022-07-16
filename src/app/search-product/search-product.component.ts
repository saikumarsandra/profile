import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Item } from '../Item';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { ThrowStmt } from '@angular/compiler';
import { AuthenticationService } from '../service/authentication.service';
import { Cart } from '../Cart';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

searchStr:string;
  constructor(private dataservice:ProductService, public auth:AuthenticationService) { 
    
    this.buyerid=localStorage.getItem("id");
    this.dataservice.getcartitems(this.buyerid).subscribe(cart=>{console.log(cart)
     
      this.cart=cart;
      this.reload;
    }); 

  }
  id=1;
  buyerid:any;
  cart: Cart[];
  item:Item[];
  ngOnInit(): void {
  this.searchStr="";
  this.reload;
  }

  searchitem()
  {

    this.dataservice.getItem(this.searchStr).subscribe(item=>this.item=item);
    this.searchStr="";
  
   
  }

  onSubmit()
  {
    this.searchitem();
    
  }
  reload(){
    window.location.reload();
  }
}


