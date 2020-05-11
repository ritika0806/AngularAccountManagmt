import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent implements OnInit {

  //account:Account[];
  //account: any = [];
 //customer:Customer={customerName:'',contactNumber:'',aadharNumber:'',panNumber:'', dateOfBirth:'', gender:'',address:'',
   account: any = { };
   customer: any = { 
     account: this.account
   };
   //account: {accountId :0, branch:'',accountType:'', amount:0}};
    details:any;
    //customer1:Customer;
    customer1:any;
  constructor(private service:MyserviceService,private router: Router) { }

  ngOnInit(): void {
  }

  AddAccount():void{
    console.log('data',this.customer);
   
    this.service.AddAccount((this.customer))
          .subscribe( data => {
            this.details=data;
            this.customer1=this.details;
            console.log(this.customer1);
            console.log(this.customer1.account.accountId);
             console.log(this.customer.gender);
            alert("Account created successfully with accId:"+this.customer1.account.accountId);
          });
        }

}
