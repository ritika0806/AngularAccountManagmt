import { Injectable } from '@angular/core';
import { logging } from 'protractor';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Customer } from 'src/Customer';

export class CustomerDetails{
  accountId:number;
  customerName:String;
  contactNumber:String;
  address:String;
  constructor(accountId:number,customerName:String,contactNumber:String,address:String)
  {
    this.accountId=accountId;
    this.customerName=customerName;
    this.contactNumber=contactNumber;
    this.address=address;
  }

}

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  Updateaccount(CustomerDetails: any) {
    throw new Error("Method not implemented.");
  }

  constructor(private http:HttpClient) { }
  acc:Account;
  cus:Customer;
  custdet:CustomerDetails
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public AddAccount(cus){
    console.log(cus);
    return this.http.post("http://localhost:8097/bank/create",cus,{responseType:'json'});
    console.log(this.cus.account.accountId);
  }
  public  ShowAccountDetails(accountId:number){    
    return this.http.get("http://localhost:9985/bank/find/"+accountId,{responseType: 'json'});
  }
  public UpdateAccount(custdet)
  {
    console.log(custdet);
    return this.http.put("http://localhost:9980/bank/updateName/"+custdet.accountId+"/"+custdet.customerName,{responseType:'text'});
  }
  public DeleteAccount(accountId:number){
    return this.http.delete("http://localhost:9988/deleteService/delete/"+accountId,{responseType:'text'});
  }
  public Updateaccont(custdet){
    console.log(custdet);
    return this.http.put("http://localhost:9980/bank/updateContact/"+custdet.accountId+"/"+custdet.contactNumber,{responseType:"text"});
    }
    public Updateadd(custdet){
      console.log(custdet);
      return this.http.put("http://localhost:9980/bank/updateAddress/"+custdet.accountId+"/"+custdet.address,{responseType:"text"});
      }
}
