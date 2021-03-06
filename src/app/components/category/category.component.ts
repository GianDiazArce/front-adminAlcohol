import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [CategoryService]
})
export class CategoryComponent implements OnInit {

  public category;
  public status;

  constructor(
    private _categoryService: CategoryService
  ) {
    //this.category = new Category(1,'');    
   }

  ngOnInit() {
    this.getCategories();
    
  }

  getCategories(){
    this._categoryService.getCategories().subscribe(
      response => {
        if(response.status == 'success'){
          this.category = response.categories;
          //this.n = Object.keys(this.category).length;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCategory(id){
    this._categoryService.delete(id).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.getCategories();
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
