import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/productComponent';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [
  {path:'products', component : ProductComponent},
  {path:'product-add', component : ProductAddComponent, canActivate:[LoginGuard]},
  {path: '' , redirectTo: 'products', pathMatch:'full'},
  {path:'product/category/:categoryId',component:ProductComponent},
  {path:'login', component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
