import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css'],
  providers: [CategoryService, ProveedorService, ProductService]
})
export class ProductNewComponent implements OnInit {

  public page_title:string;
  public categories;
  public proveedors;
  public product: Product;
  public status;

  constructor(
    private _categoryService: CategoryService,
    private _proveedorService: ProveedorService,
    private _productService: ProductService
  ) {
    this.page_title = 'Crear producto';
    this.product = new Product(1, 0, 0, '', 0, 0, 0, '');
   }

  ngOnInit() {
    this.getCategories();
    this.getProveedors();
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.categories = response.categories;
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  getProveedors(){
    this._proveedorService.getProviders().subscribe(
      response => {
        if(response.status == 'success'){
          this.proveedors = response.proveedors;          
        }
      },
      error =>{
        console.log(error);
      }
    );
  }

  onSubmit(form){
    this._productService.save(this.product).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          form.reset();
        }else {
          this.status = 'error';
        }
        
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

}
