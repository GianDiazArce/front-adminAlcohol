import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  public products:any;
  public status: string;

  constructor(
    private _productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(
      response => {
        if(response.status == 'success'){
          this.products = response.products;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProduct(id){
    this._productService.delete(id).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.getProducts();
        }else{
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }

}
