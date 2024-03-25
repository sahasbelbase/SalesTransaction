import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss']
})
export class StoreFormComponent implements OnInit {


  formObject:any={
    storeName:''
  }

  constructor(
    public dialogRef: MatDialogRef <StoreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public ss:StoreService
  ) { }

  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject ={...this.data.data};

    }
  }

  save(){
    this.ss.setStore(this.formObject).subscribe(res=>{
      console.log(res),
      console.log("recived")
      this.dialogRef.close(res);
    })
  }

  close(){}
}

