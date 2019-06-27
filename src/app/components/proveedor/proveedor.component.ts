import { Component, OnInit } from '@angular/core';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
  providers: [ProveedorService]
})
export class ProveedorComponent implements OnInit {

  public proveedors: any;
  public page_title:string;

  constructor(
    private _proveedorService: ProveedorService
  ) { 
    this.page_title = 'Proveedores';
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

}
