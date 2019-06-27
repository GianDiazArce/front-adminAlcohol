import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title:string;
  public user: User;
  public status: string;
  public identity;
  public token;


  constructor(
    private _userService : UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.page_title = 'Identificate';
    this.user = new User(1,'','','');
   }

  ngOnInit() {
  }

  onSubmit(form){
    this._userService.login(this.user).subscribe(
      response => {
        if(response.status != 'error'){          
          this.token = response;

          this._userService.login(this.user, true).subscribe(
            response => {
              this.identity = response;

              localStorage.setItem('token', this.token);
              localStorage.setItem('identity', JSON.stringify(this.identity));

              this.status = 'success';
              this._router.navigate(['/inicio']);

            },
            error => {
              console.log(error);
              this.status = 'error';
            }
            
          )
        }
        
      },
      error => {
        console.log(error)
        this.status = 'error'
      }
    );
  }

  

}
