import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  //templateUrl: './category-edit.component.html',
  templateUrl: '../category-new/category-new.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [UserService, CategoryService]
})
export class CategoryEditComponent implements OnInit {

  public is_edit: boolean;
  public token;
  public identity;
  public category: Category;
  public status;
  public page_title;
  public formAlert;

  constructor(
    private _userService: UserService,
    private _categoryService: CategoryService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.is_edit = true;
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.page_title = 'Editar categoria';
    this.formAlert = 'editada';
   }

  ngOnInit() {
    this.category = new Category(1,'');
    this.getCategory();
  }

  getCategory(){
    this._route.params.subscribe(
      params => {
        let id = +params['id'];
        this._categoryService.getCategory(id).subscribe(
          response => {
            if(response.status == 'success'){
              //this.status = 'success';
              this.category = response.category;
            }else{
              this.status = 'error';
            }
          },
          error => {
            console.log(error);
            this.status = 'error';
          }
        )
      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    );
  }

  onSubmit(form){
    this._categoryService.update(this.token, this.category.id, this.category).subscribe(
      response => {
        if(response.status == 'success'){
          this._router.navigate(['/categorias']);
        }
      },
      error => {
        console.log(error);
      }
    )
    
  }

}
