import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-new/product-new.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [UserService, ProductService, CategoryService, ProveedorService]
})
export class ProductEditComponent implements OnInit {

  public page_title: string;
  public token;
  public product: Product;
  public categories;
  public proveedors;

  constructor(
    private _userService: UserService,
    private _productService: ProductService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _categoryService: CategoryService,
    private _proveedorService: ProveedorService
  ) {
    this.page_title = 'Editar producto';
    this.token = this._userService.getToken();
   }

  ngOnInit() {
    this.product = new Product(1,1,1,'',1,1.0,1.0,'');
    this.getCategories();
    this.getProveedors();
    this.getProduct();
    
  }

  getProduct(){
    this._route.params.subscribe(
      params => {
        let id = params.id;
        this._productService.getProduct(id).subscribe(
          response => {
            if(response.status == 'success'){
              this.product = response.product;
            }
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error);
      }
    )
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
    this._productService.update(this.token, this.product.id, this.product).subscribe(
      response => {
        if(response.status == 'success'){
          this._router.navigate(['/productos']);
        }else {
          console.log('error');
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  

}
