import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './mycomponents/movies/movies.component';
import { OnemovieComponent } from './mycomponents/onemovie/onemovie.component';

const routes: Routes = [
  {path:'unfilm/:id',component : OnemovieComponent },
  {path:'touslesfilms',component : MoviesComponent },
  {path:'**',component : MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
