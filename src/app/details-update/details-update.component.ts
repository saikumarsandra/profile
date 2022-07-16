import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Buyer } from '../Buyer';
import { BuyerUpdate } from '../BuyerUpdate';
import { ProductService } from '../product.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-details-update',
  templateUrl: './details-update.component.html',
  styleUrls: ['./details-update.component.css']
})
export class DetailsUpdateComponent implements OnInit {
  id:number;
  user: Buyer;
  constructor(public  router: Router,public auth:AuthenticationService,public dataService:ProductService,private route: ActivatedRoute) {

    
   }

  ngOnInit() {

    this.user= new Buyer();

    this.id = this.route.snapshot.params['this.auth.getBuyerId()'];
    
    this.dataService.getOneById(this.auth.getBuyerId())
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  
    
  }
update(){
    
    this.dataService.Update(this.auth.getBuyerId(), this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new Buyer();
       window.location.reload();
      }, error => console.log(error));

}
onSubmit(){
  this.update();
}
}
