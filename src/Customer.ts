export interface Customer
{
    customerName:String;
    contactNumber:String;
    aadharNumber:String;
    panNumber:String;
    dateOfBirth:String;
    gender:String;
    address:String;
    account:Account;
}

export interface Account{
    accountId:number;
    branch:String;
    accountType:String;
    amount:number;
}
