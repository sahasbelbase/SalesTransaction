import { Component, OnInit } from '@angular/core';
import { StoreService } from './store.service';
import { StoreFormComponent } from './store-form/store-form.component';
import { MatDialog } from '@angular/material/dialog'; 

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss'],
})
export class StoreComponent implements OnInit {
  constructor(public cs: StoreService, public dialog: MatDialog) {}

  storeList: any;
  dynamicColumns: string[] = []; // Array to hold dynamic column names

  getStore() {
    let json = {};
    this.cs.getStore(json).subscribe((res) => {
      if (res) {
        this.storeList = res;
        // Extracting dynamic column names from the first item in the array
        this.dynamicColumns = Object.keys(this.storeList[0]);
      }
    });
  }

  ngOnInit(): void {
    this.getStore();
  }

  add() {
    const dialogRef = this.dialog.open(StoreFormComponent, {
      data: { data: 'xyz', mode: 'Add' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((newStore: any) => {
      
      if (newStore) {
        
        this.storeList.push(newStore); 
      }
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(StoreFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((editedStore: any) => {
      if (editedStore) {
        const index = this.storeList.findIndex(
          (c: any) => c.id === editedStore.id
        );
        if (index !== -1) {
          this.storeList[index] = editedStore;
        }
      }
    });
  }

  delete(store: any) {
    console.log('Delete:', store);
  }
}
