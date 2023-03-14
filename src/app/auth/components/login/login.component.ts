import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


username:number =0;
password:string="";
private usuarioLogueado:boolean | undefined;


constructor(private authService:AuthenticationService ){}

loginUser(){
  console.log(this.username," ",this.password)
  this.authService.loginUser(this.username,this.password)
   
}

ngOnInit(){
  
}

}
