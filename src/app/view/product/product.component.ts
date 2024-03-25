import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from './product.service';
import { ProductFormComponent } from './product-form/product-form.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  constructor(public ps: ProductService, public dialog: MatDialog) {}

  productList: any;

  getProduct() {
    let json = {};
    this.ps.getProduct(json).subscribe((res) => {
      if (res) {
        this.productList = res;
      }
    });
  }

  ngOnInit(): void {
    this.getProduct();
  }

  add() {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { data: 'xyz', mode: 'Add' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((newProduct: any) => {
      if (newProduct) {
        this.productList.push(newProduct);
      }
    });
  }

  edit(row: any) {
    const dialogRef = this.dialog.open(ProductFormComponent, {
      data: { data: row, mode: 'edit' },
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe((editedProduct: any) => {
      if (editedProduct) {
        const index = this.productList.findIndex(
          (c: any) => c.id === editedProduct.id
        );
        if (index !== -1) {
          this.productList[index] = editedProduct;
        }
      }
    });
  }

  delete(product: any) {
    console.log('Delete:', product);
  }
}
