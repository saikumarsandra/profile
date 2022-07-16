export class BuyerUpdate
{
    buyerId:number;
userName:string;
password:string;
email:string;
mobileNumber:number;

constructor(userName,password,email,mobileNumber)
{
 
    this.userName=userName;
    this.password=password;
    this.email=email;
    this.mobileNumber=mobileNumber;
    
}
}