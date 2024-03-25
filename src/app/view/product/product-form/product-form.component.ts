import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  formObject:any={
    productName:'',
    productDescription:'',
    productPrice:'',
    departmentName:'',
    inventoryId:'',
    expiryDate:'',
  }

  constructor(
    public dialogRef: MatDialogRef <ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cs:ProductService
  ) { }

  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject ={...this.data.data};

    }
  }

  save(){
    this.cs.setProduct(this.formObject).subscribe(res=>{
      console.log(res),
      console.log("recived")
      this.dialogRef.close(res);
    })
  }

  close(){}
}

