import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Customer } from 'src/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-showaccount',
  templateUrl: './showaccount.component.html',
  styleUrls: ['./showaccount.component.css']
})
export class ShowaccountComponent implements OnInit {
  CustomerDetails: any = {};
  accounts:any;
  accountId:number;
  check:boolean;
  constructor(private service:MyserviceService, private router:Router) { }

  ngOnInit(): void {
  }

fetch(){
  console.log(this.accountId);
  this.service.ShowAccountDetails(this.accountId).subscribe((data)=>
  {
    this.accounts=data;
    if(this.accounts==null){
    this.check=false;
    alert("AccountId is not valid!")
    }
    else{
      this.check=true;
    }
  });
  
  
  
}
}
