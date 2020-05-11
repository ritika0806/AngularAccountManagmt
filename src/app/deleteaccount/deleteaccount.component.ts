import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { Customer } from 'src/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {
  
  CustomerDetails: any = {};
 accounts: any;
 response: any;
 checked: boolean;
 customerdetails: any;
 

  accountId: number;
 
  constructor(private service: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  DeleteAccount(): void {
    console.log(this.accountId);
    this.service.ShowAccountDetails(this.accountId).subscribe(data => {
      this.response = data;
      if (this.response != null) {
        this.service.DeleteAccount(this.accountId)
          .subscribe(data => {
            this.accounts = data;
            console.log(this.accounts);
           // console.log(this.customer.account.accountId)
            alert('deleted succesfully');
          });
      }

      else {
        this.checked = false;
        alert('accountID not valid');
      }
    });


  }

}
