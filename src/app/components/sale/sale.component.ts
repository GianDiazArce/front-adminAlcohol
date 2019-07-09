import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/models/product';
import { Sale } from 'src/app/models/sale';
import { SaleService } from 'src/app/services/sale.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css'],
  providers: [CategoryService, ProductService, UserService, SaleService]
})
export class SaleComponent implements OnInit {

  public page_title: string;
 
  // Variables de usuario
  public token;
  public identity;

  // Variables de categorias
  public category_id:number;
  public categories;
  

  // Variables de producto
  public product_id:number;
  public products;
  public product;

  // Variables de Venta
  public sale: Sale;
  public discount: number;
  public total: number;
  public amount: number;
  public price_discount: number;
  public sales;

  public status:string;

  constructor(
    private _categoryService: CategoryService,
    private _productService: ProductService,
    private _userService: UserService,
    private _saleService: SaleService
  ) {
    this.page_title = 'Ventas';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    
   }

  ngOnInit() {
    this.getSales();
    this.product = new Product(0, 0, 0, '', 0, 0, 0, '');
    this.sale = new Sale(1, 0, this.identity.sub , 0, 0);

        // public id:number,
        // public product_id: number,
        // public user_id: number,
        // public total: number,
        // public discount: number
    this.getCategories();
  }


  totalUpdate(){
    this.total = this.product.price_sale * this.amount ;
    //this.total = (this.total * this.discount) / 100;
    //this.sale.discount = this.discount;
  }

  totalDiscount(){
    this.totalUpdate();
    this.sale.total = this.total;
    if(this.discount == 0){
      this.totalUpdate();
    }else{
      this.price_discount = (this.total * this.discount) / 100;            
      this.total = this.total - this.price_discount; 
      this.sale.descuento = this.discount;
      this.sale.total = this.total;
    } 
    
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.categories = response.categories;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getProducts(s){
    this.product_id = 0;
    this._categoryService.getProductByCategory(this.category_id).subscribe(
      response => {
        if(response.status == 'success'){
          this.products = response.products;
        }
      },
      error => {
        console.log( error);
      }
    )
  }

  getProduct(a){
    console.log(a.value);
    this._productService.getProduct(this.product_id).subscribe(
      response => {
        if(response.status == 'success'){
          this.product = response.product;
          this.sale.product_id = this.product.id;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  getSales(){
    this._saleService.getSales().subscribe(
      response => {
        if(response.status == 'success'){
          this.sales = response.sales;
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  onSubmit(form){
    this.sale.total = Math.round(this.sale.total * 10 ) / 10;
    this.product.stock -=  this.amount;
    this._saleService.save(this.token, this.sale).subscribe(
      response => {
        if(response.status == 'success'){
          this.getSales();
          form.reset();
          this.status = 'success';
          this._saleService.updateStock(this.product.id, this.product, this.token).subscribe(
            response => {
              if(response.status == 'success'){
                this.status = 'success';
                console.log(response);
              }else{
                this.status = 'error';
              }
            },
            error => {
              console.log(error);
              this.status = 'error';
            }
          );
        }else{
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
