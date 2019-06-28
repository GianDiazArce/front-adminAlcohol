import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';
import { ProveedorComponent } from './components/proveedor/proveedor.component';
import { SaleComponent } from './components/sale/sale.component';
import { LoginComponent } from './components/login/login.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';
import { CategoryNewComponent } from './components/category-new/category-new.component';
import { ProductNewComponent } from './components/product-new/product-new.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { ProveedorNewComponent } from './components/proveedor-new/proveedor-new.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    CategoryComponent,
    ProductComponent,
    ProveedorComponent,
    SaleComponent,
    LoginComponent,
    CategoryDetailComponent,
    CategoryNewComponent,
    ProductNewComponent,
    CategoryEditComponent,
    ProveedorNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
