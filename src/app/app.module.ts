import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { CursosViewComponent } from './cursos-view/cursos-view.component';
import { CursoContenidosViewComponent } from './curso-contenidos-view/curso-contenidos-view.component';
import { CursoContenidoComponent } from './curso-contenido/curso-contenido.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegisterComponent } from './register/register.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { CourseContentComponent } from './course-content/course-content.component';
import { CourseContentContainerComponent } from './course-content-container/course-content-container.component';
import { AuthViewComponent } from './auth-view/auth-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CursoComponent,
    CursosViewComponent,
    CursoContenidosViewComponent,
    CursoContenidoComponent,
    UsuarioComponent,
    RegisterComponent,
    CourseViewComponent,
    CourseContentComponent,
    CourseContentContainerComponent,
    AuthViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
