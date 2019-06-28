import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/models/proveedor';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-proveedor-new',
  templateUrl: './proveedor-new.component.html',
  styleUrls: ['./proveedor-new.component.css'],
  providers: [ProveedorService, UserService]
})
export class ProveedorNewComponent implements OnInit {

  public page_title: string;
  public proveedor: Proveedor;
  public token;
  public status;

  constructor(
    private _proveedorService: ProveedorService,
    private _userService : UserService
  ) { 
    this.page_title = 'Nuevo proveedor';
    this.proveedor = new Proveedor(1, '', '');
    this.token = this._userService.getToken();
  }

  ngOnInit() {
  }

  onSubmit(form){
    this._proveedorService.save(this.token, this.proveedor).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
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
