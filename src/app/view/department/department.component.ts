import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DepartmentService } from './department.service';
import { DepartmentFormComponent } from './department-form/department-form.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss'],
})
export class DepartmentComponent implements OnInit {
  constructor(public ds: DepartmentService, public dialog: MatDialog) {}

  departmentList: any;

  getDepartment() {
    let json = {};
    this.ds.getDepartment(json).subscribe((res) => {
      if (res) {
        this.departmentList = res;
      }
    });
  }

  ngOnInit(): void {
    this.getDepartment();
  }

  add() {
    const dialogRef = this.dialog.open(DepartmentFormComponent, {
      data: { data: 'xyz', mode: 'Add' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((newDepartment: any) => {

      if (newDepartment) {
 
        this.departmentList.push(newDepartment); 
      }
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(DepartmentFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((editedDepartment: any) => {
      if (editedDepartment) {
        const index = this.departmentList.findIndex(
          (c: any) => c.id === editedDepartment.id
        );
        if (index !== -1) {
          this.departmentList[index] = editedDepartment;
        }
      }
    });
  }

  delete(department: any) {
    console.log('Delete:', department);
  }
}