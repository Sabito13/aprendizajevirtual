import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


username:string="";
password:string="";
private usuarioLogueado:boolean | undefined;


loginUser(){
  console.log(this.username," ",this.password)
}
}
