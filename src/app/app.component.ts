import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  public title = 'Front-adminAlcohol';
  public identity;
  public token
  public url;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ){}

  ngOnInit(){
    console.log('WebApp Cargada');
  }
  
  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('identity');

    this.identity = null;
    this.token = null;

    this._router.navigate(['/inicio']);
  }



}
