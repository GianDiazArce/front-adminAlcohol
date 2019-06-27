import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css'],
  providers: [CategoryService]
})
export class CategoryDetailComponent implements OnInit {

  public category:any;
  public id:number;
  public category_id: number;
  public products:any;
  public status;


  constructor(
    private _categoryService: CategoryService,
    private _route: ActivatedRoute
  ) {
    
   }

  ngOnInit() {
    this.getCategory();
    this.getProductByCategory();
  }

  getCategory(){
    
    this._route.params.subscribe(
      params => {
        this.id = params.id;

        this._categoryService.getCategory(this.id).subscribe(
          response => {
            if(response.status == 'success'){
              this.category = response.category;
            }
          },
          error => {
            console.log(error);
          }
        );
      },
      error => {
        console.log(error);
      }
    )
  }

  getProductByCategory(){
    this._route.params.subscribe(
      params => {
        this.category_id = params.id;

        this._categoryService.getProductByCategory(this.category_id).subscribe(
          response => {
            if(response.status == 'success'){
              this.products = response.products;
              this.status = 'success';
            }else{
              this.status = 'error';
            }
            
          },
          error => {
            console.log (error);
            this.status = 'error';
          }
        );
      },
      error => {
        console.log (error);
        this.status = 'error';
      }
    )
  }

}
