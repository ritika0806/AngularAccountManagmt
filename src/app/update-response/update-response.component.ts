import { Component, OnInit } from '@angular/core';
import { MyserviceService, CustomerDetails } from '../myservice.service';
import { Router } from '@angular/router';
import { Customer } from 'src/Customer';

@Component({
  selector: 'app-update-response',
  templateUrl: './update-response.component.html',
  styleUrls: ['./update-response.component.css']
})
export class UpdateResponseComponent implements OnInit {

 //CustomerDetails=new CustomerDetails(0,"","","")
  CustomerDetails: any = {};
  accounts: any;
  response: any;
  checked: boolean;
  customerdetails: any;
  constructor(private service: MyserviceService, private router: Router) { }


  ngOnInit(): void {
  }
  updateAccount() :void {
    console.log(this.CustomerDetails.accountId);
    this.service.ShowAccountDetails(this.CustomerDetails.accountId).subscribe(data => {
      this.response = data;
      if (this.response != null) {
        this.service.UpdateAccount(this.CustomerDetails)
          .subscribe(data => {
            this.accounts = data;
            console.log(this.accounts);
            //console.log(this.customer.account.accountId)
            alert('updated succesfully');
          });
      }

      else {
        this.checked = false;
        alert('accountID not valid');
      }
    });


  }

}
