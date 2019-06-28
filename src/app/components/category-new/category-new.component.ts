import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-new',
  templateUrl: './category-new.component.html',
  styleUrls: ['./category-new.component.css'],
  providers: [CategoryService]
})
export class CategoryNewComponent implements OnInit {

  public page_title:string;
  public category: Category;
  public status: string;
  public formAlert;

  constructor(
    private _categoryService: CategoryService
  ) { 
    this.page_title = 'Crear categoria';
    this.category = new Category(1,'');
    this.formAlert = 'creada'
  }

  ngOnInit() {
    
  }
  onSubmit(form){
    this._categoryService.newCategory(this.category).subscribe(
      response => {
        if(response.status == 'success'){
          this.category = response.category;
          this.status = 'success';
          form.reset();
        }
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }

}
