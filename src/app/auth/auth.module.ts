import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthViewComponent } from './pages/auth-view/auth-view.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    AuthViewComponent
  ]
})
export class AuthModule { }
