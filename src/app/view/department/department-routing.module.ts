import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MatSelectModule} from '@angular/material/select';

import { DepartmentComponent } from './department.component';

const routes: Routes = [{ path: '', component: DepartmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), MatSelectModule],
  exports: [RouterModule],
})
export class DepartmentRoutingModule {}
