import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAccountComponent } from './add-account/add-account.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { ShowaccountComponent } from './showaccount/showaccount.component';
import { UpdateResponseComponent } from './update-response/update-response.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { UpdateAddressComponent } from './update-address/update-address.component';


const routes: Routes = [
  
  { path: 'add', component: AddAccountComponent},
  { path: 'update', component: UpdateaccountComponent},
  { path: 'delete', component: DeleteaccountComponent},
  { path: 'show', component: ShowaccountComponent},
  {path: 'name', component:UpdateResponseComponent},
  {path: 'contact' , component:UpdateContactComponent},
  {path: 'address' , component:UpdateAddressComponent},
  {path:'', redirectTo: '/add', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
