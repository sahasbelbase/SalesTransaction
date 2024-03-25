import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.scss']
})
export class DepartmentFormComponent implements OnInit {


  formObject:any={
    departmentName:'',
    branchName:'',

  }

  constructor(
    public dialogRef: MatDialogRef <DepartmentFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cs:DepartmentService
  ) { }

  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject ={...this.data.data};

    }
  }

  save(){
    this.cs.setDepartment(this.formObject).subscribe(res=>{
      console.log(res),
      console.log("recived")
      this.dialogRef.close(res);
    })
  }

  close(){}
}

