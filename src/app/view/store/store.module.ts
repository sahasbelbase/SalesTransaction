import { StoreRoutingModule } from './store-routing.module';
import { StoreComponent } from './store.component';
import { StoreService } from './store.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { StoreFormComponent } from './store-form/store-form.component';



@NgModule({
  declarations: [
    StoreComponent,
    StoreFormComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [StoreService],
})
export class StoreModule {}