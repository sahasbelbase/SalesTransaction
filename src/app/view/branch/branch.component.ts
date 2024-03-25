import { Component, OnInit } from '@angular/core';
import { BranchFormComponent } from './branch-form/branch-form.component';
import { BranchService } from './branch.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss'],
})


export class BranchComponent implements OnInit {
  constructor(public bs: BranchService, public dialog: MatDialog) {}

  branchList: any;

  getBranch() {
    let json = {};
    this.bs.getBranch(json).subscribe((res) => {
      if (res) {
        this.branchList = res;
      }
    });
  }

  ngOnInit(): void {
    this.getBranch();
  }

  add() {
    const dialogRef = this.dialog.open(BranchFormComponent, {
      data: { data: 'xyz', mode: 'Add' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((newBranch: any) => {
      // Check if a new customer was added
      if (newBranch) {
        // Assuming newBranch contains the newly added Branch object
        this.branchList.push(newBranch); // Add the new Branch to the list
      }
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(BranchFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((editedBranch: any) => {
      if (editedBranch) {
        const index = this.branchList.findIndex(
          (c: any) => c.id === editedBranch.id
        );
        if (index !== -1) {
          this.branchList[index] = editedBranch;
        }
      }
    });
  }

  delete(branch: any) {
    console.log('Delete:', branch);
  }
}
