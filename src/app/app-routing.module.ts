import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { ProductComponent } from './components/product/product.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { ProveedorNewComponent } from './components/proveedor-new/proveedor-new.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { ProveedorEditComponent } from './components/proveedor-edit/proveedor-edit.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { SaleComponent } from './components/sale/sale.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inicio', component: HomeComponent},
  {path: 'login', component: LoginComponent},

  // Rutas de categorias
  {path: 'categorias', component: CategoryComponent},
  {path: 'categoria/:id', component: CategoryDetailComponent},
  {path: 'crear-categoria', component: CategoryNewComponent},
  {path: 'editar-categoria/:id', component: CategoryEditComponent},

  // Rutas de productos
  {path: 'productos', component: ProductComponent},
  {path: 'crear-producto', component: ProductNewComponent},
  {path: 'editar-producto/:id', component: ProductEditComponent},

  // Rutas de proveedores
  {path: 'proveedores', component: ProveedorComponent},
  {path: 'crear-proveedor', component: ProveedorNewComponent},
  {path: 'editar-proveedor/:id', component: ProveedorEditComponent},

  // Rutas de ventas
  {path: 'ventas', component: SaleComponent},


  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
