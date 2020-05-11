import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerDetails, MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {



 //CustomerDetails=new CustomerDetails(0,"","","")
 CustomerDetails: any = {};
 accounts: any;
 response: any;
 checked: boolean;
 customerdetails: any;
  constructor(private service: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  updateaccont():void{
    console.log(this.CustomerDetails.accountId);
    this.service.ShowAccountDetails(this.CustomerDetails.accountId).subscribe(data => {
      this.response = data;
      if (this.response != null) {
        this.service.Updateaccont(this.CustomerDetails)
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
