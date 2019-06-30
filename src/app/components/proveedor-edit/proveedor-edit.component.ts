import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Proveedor } from 'src/app/models/proveedor';

@Component({
  selector: 'app-proveedor-edit',
  //templateUrl: './proveedor-edit.component.html',
  templateUrl: '../proveedor-new/proveedor-new.component.html',
  styleUrls: ['./proveedor-edit.component.css'],
  providers: [ProveedorService, UserService]
})
export class ProveedorEditComponent implements OnInit {

  public page_title: string;
  public token;
  public proveedor: Proveedor;
  public is_edit: boolean;

  constructor(
    private _proveedorService: ProveedorService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.page_title = 'Editar proveedor';
    this.token = this._userService.getToken();
    this.is_edit = true;
   }

  ngOnInit() {
    this.proveedor = new Proveedor(1,'','');
    this.getProveedor();
  }

  getProveedor(){
    this._route.params.subscribe(
      params => {
        let id = params.id;
        this._proveedorService.getProvider(id).subscribe(
          response => {
            if(response.status == 'success'){
              this.proveedor = response.proveedor;
            } else {
              console.log('Error');
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

  onSubmit(form){
    this._proveedorService.update(this.token, this.proveedor.id, this.proveedor).subscribe(
      response => {
        if(response.status == 'success'){
          this._router.navigate(['/proveedores']);
        }
      }, 
      error => {
        console.log(error);
      }
    )
  }

}
