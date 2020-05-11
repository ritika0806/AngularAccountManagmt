import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ShowaccountComponent } from './showaccount/showaccount.component';
import { UpdateResponseComponent } from './update-response/update-response.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAccountComponent,
    UpdateaccountComponent,
    DeleteaccountComponent,
    ShowaccountComponent,
    UpdateResponseComponent,
    UpdateContactComponent,
    UpdateAddressComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
