import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [ProveedorService, UserService]
})
export class ProveedorComponent implements OnInit {

  public proveedors: any;
  public page_title:string;
  public token;
  public status;

  constructor(
    private _proveedorService: ProveedorService,
    private _userService: UserService
  ) { 
    this.page_title = 'Proveedores';
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.getProveedors();
  }

  getProveedors(){
    this._proveedorService.getProviders().subscribe(
      response => {
        if(response.status == 'success'){
          this.proveedors = response.proveedors;
        }

      },
      error => {
        console.log(error);
      }
    );
  }

  deleteCategory(id){
    this._proveedorService.delete(this.token, id).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          this.getProveedors();
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
