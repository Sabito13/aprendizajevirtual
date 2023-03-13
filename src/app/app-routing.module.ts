import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthViewComponent } from './auth/pages/auth-view/auth-view.component';
import { CourseViewComponent } from './course/pages/course-view/course-view.component';
import { HomeViewComponent } from './home/pages/home-view/home-view.component';


const routes: Routes = [ 
  {path:'home',component:HomeViewComponent},
  {path:'login',component:AuthViewComponent},
  {path:'course',component:CourseViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
