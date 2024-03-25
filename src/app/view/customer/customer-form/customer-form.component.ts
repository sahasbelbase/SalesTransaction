import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
})
export class CustomerFormComponent implements OnInit {


  formObject:any={
    firstName:'',
    lastName:'',
    customerAddress:'',
    customerContact:'',
  }

  constructor(
    public dialogRef: MatDialogRef <CustomerFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cs:CustomerService
  ) { }

  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject ={...this.data.data};

    }
  }

  save(){
    this.cs.setCustomer(this.formObject).subscribe(res=>{
      console.log(res),
      console.log("recived")
      this.dialogRef.close(res);
    })
  }

  close(){}
}

