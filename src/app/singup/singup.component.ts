import { Component, OnInit } from '@angular/core';
import { Buyer } from '../Buyer';import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(private buyerservice:ProductService, private router:Router ) { }

  buyer:Buyer =new Buyer();

  ngOnInit(): void {
  }

  
  addbuyer()
  {
    console.log("add buyermethod");
    this.buyerservice.createbuyer(this.buyer).subscribe(buyer=>{alert("your details are saved successfully .")
    this.router.navigate(['login']);
                                          })
  }

  onSubmit()
  {
    this.addbuyer();
   
  }

}
