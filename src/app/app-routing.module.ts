import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './mycomponents/movies/movies.component';
import { OnemovieComponent } from './mycomponents/onemovie/onemovie.component';
import { SearchmoviesComponent } from './mycomponents/searchmovies/searchmovies.component';
import { UploadimageComponent } from './mycomponents/uploadimage/uploadimage.component';
import { AddfilmComponent } from './mycomponents/addfilm/addfilm.component';

const routes: Routes = [
  {path:'ajouterfilm',component : AddfilmComponent },
  {path:'learnimage',component : UploadimageComponent },
  {path:'chercherfilms',component : SearchmoviesComponent },
  {path:'unfilm/:id',component : OnemovieComponent },
  {path:'touslesfilms',component : MoviesComponent },
  {path:'**',component : MoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
