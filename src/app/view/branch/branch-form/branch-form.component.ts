import { Component, Inject,OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BranchService } from '../branch.service';
@Component({
  selector: 'app-branch-form',
  templateUrl: './branch-form.component.html',
  styleUrls: ['./branch-form.component.scss']
})
export class BranchFormComponent implements OnInit {

  formObject:any={
    branchName:'',
    address:''

  }
  constructor(
    public dialogRef: MatDialogRef <BranchFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cs:BranchService
  ) { }

  ngOnInit(): void {
    if (this.data.mode.toLowerCase() == 'edit') {
      this.formObject ={...this.data.data};

    }
  }

  save(){
    this.cs.setBranch(this.formObject).subscribe(res=>{
      console.log(res),
      console.log("recived")
      this.dialogRef.close(res);
    })
  }

  close(){}
}

