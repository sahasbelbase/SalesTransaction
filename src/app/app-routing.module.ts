import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { LoginComponent } from './layout/register/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'navigation',
    component: NavigationComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'customer', loadChildren: () => import('./view/customer/customer.module').then(m => m.CustomerModule) },
      { path: 'product', loadChildren: () => import('./view/product/product.module').then(m => m.ProductModule) },
      { path: 'store', loadChildren: () => import('./view/store/store.module').then(m => m.StoreModule) },
      { path: 'branch', loadChildren: () => import('./view/branch/branch.module').then(m => m.BranchModule) },
      { path: 'invoice', loadChildren: () => import('./view/invoice/invoice.module').then(m => m.InvoiceModule) },
      { path: 'department', loadChildren: () => import('./view/department/department.module').then(m => m.DepartmentModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }