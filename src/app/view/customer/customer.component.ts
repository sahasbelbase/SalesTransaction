import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerFormComponent } from './customer-form/customer-form.component';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss'],
})
export class CustomerComponent implements OnInit {
  dataSource: any;
  displayedColumns: string[] = [];
  selectedIndex: any;
  customerList: any;
  
  constructor(public cs: CustomerService, public dialog: MatDialog) {}


  getCustomer() {
    let json = {};
    this.cs.getCustomer(json).subscribe((res) => {
      if (res) {
        this.customerList = res;

        this.dataSource = res.data;
        this.displayedColumns = res.column;

        console.log(res)
      }
    });
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  add() {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      data: { data: 'xyz', mode: 'Add' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((newCustomer: any) => {
      if (newCustomer) {
        this.customerList.push(newCustomer);
      }
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(CustomerFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((editedCustomer: any) => {
      if (editedCustomer) {
        const index = this.customerList.findIndex(
          (c: any) => c.id === editedCustomer.id
        );
        if (index !== -1) {
          this.customerList[index] = editedCustomer;
        }
      }
    });
  }

  delete(customer: any) {
    console.log('Delete:', customer);
  }

  selectedRowDetail(row: any, i: number) { // Add this method
    this.selectedIndex = row;
    this.selectedIndex = i;
  }
}
