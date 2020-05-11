import { Component, OnInit } from '@angular/core';
import { CustomerDetails, MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  //CustomerDetails=new CustomerDetails(0,"","","")
 CustomerDetails: any = {};
 accounts: any;
 response: any;
 checked: boolean;
 customerdetails: any;
  constructor(private service: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }
  updateadd():void{
    console.log(this.CustomerDetails.accountId);
    this.service.ShowAccountDetails(this.CustomerDetails.accountId).subscribe(data => {
      this.response = data;
      if (this.response != null) {
        this.service.Updateadd(this.CustomerDetails)
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
