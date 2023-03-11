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
  
  this.authService.loginUser({username:this.username,password:this.password}).subscribe( (response:any) =>{
    const headers = response.getHeaders();
    const names= headers.getAll();
    names.forEach( (headerName:any) => {
      console.log(headerName,headers.get(headerName));
    });
  })
}

ngOnInit(){
  
}

}
