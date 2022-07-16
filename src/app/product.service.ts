import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { Cart } from './Cart';
import { ViewCart } from './ViewCart';
import { $ } from 'protractor';
import { TransactionEntity } from './transaction';
import { Buyer } from './Buyer';
import { ApiResponse } from './model/api.response';
import { User } from './model/user.model';
import { BuyerUpdate } from './BuyerUpdate';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl2='http://localhost:8918/Buyer'
  private baseUrl = 'http://localhost:8917/itemapi/getallbyname';
  private update='http://localhost:8918/update'
  private USER_GEt='http://localhost:8918/Buyer/all/'
  updateProduct: any;

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8918/' + 'token/generate-token', loginPayload);
  }
  constructor(private http:HttpClient) { }

addTocart(buyerid:number,cart:Cart): Observable<any>
{
  return this.http.post(`http://localhost:8918/api/additem/${buyerid}`,cart);
}
 

getItem(searchstr:string) : Observable<any>
{

  return this.http.get(`${this.baseUrl}/${searchstr}`);
}
getcartitems(id:any):Observable<any>
  {   
    
      console.log("in service method");
      return this.http.get(`http://localhost:8918/api/${id}/getall`);
  }
  


  updateCartItem(view:ViewCart):Observable<any>
  {

    console.log(view);
    return this.http.put(`http://localhost:8918/api/update`,view);
  }
  deletecartitem(i:number) :Observable<any>
  {
    console.log("service method"+i);
  return  this.http.delete(`http://localhost:8918/api/deleteitem/${i}`);
  }

  getitembysubcatagory(id:number):Observable<any>
  {
   return  this.http.get(`http://localhost:8917/itemapi/getbysubid/${id}`);
  }
  getitembyid(id:number) :Observable<any>
  {
    return this.http.get(`http://localhost:8917/itemapi/item/${id}`)

  }

  createbuyer(buyer:Buyer) :Observable<any>
  {
    console.log("createBuyer");
  return this.http.post(`${this.baseUrl2}`,buyer)

  }
 checkout(id:number,transaction:TransactionEntity):Observable<any>
 {


   console.log("servicechecout"+ "===>"+id);
   console.log(transaction);
   return this.http.post(`http://localhost:8918/api/checkout/${id}`,transaction);
 }
 getAllitems():Observable<any>
  {   
    
      console.log("in service method");
      return this.http.get(`http://localhost:8917/itemapi/item/all`);
  }

  Update(id:any,user:any):Observable<any>
  {
    console.log("hii data recieved")
    return this.http.put<any>(`http://localhost:8918/update/${id}`,user);
  }
 
 
    
  getOneById(id:any) :Observable<any>
  {
    return this.http.get(`http://localhost:8918/Buyer/${id}`);

  }
getAllUsers():Observable<any>{

  return this.http.get(`http://localhost:8918/Buyers`);
}
 
getAllOrdersByUser(id:number):Observable<any>
{
  return this.http.get(`http://localhost:8918/${id}/getall`);



}

}
