import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
import { Item } from '../Item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private productservice:ProductService ,private  router:Router) { }
item:Item[];


  ngOnInit(): void {
this.productservice.getAllitems().subscribe(item=>this.item=item);

  }


  ProductDetails(id:number)
  {
    
   this.router.navigate(['card',id]);
  
  }

}
