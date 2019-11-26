import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { MoviesComponent } from './mycomponents/movies/movies.component';
import { OnemovieComponent } from './mycomponents/onemovie/onemovie.component';
import { SearchmoviesComponent } from './mycomponents/searchmovies/searchmovies.component';
import { UploadimageComponent } from './mycomponents/uploadimage/uploadimage.component';
import { AddfilmComponent } from './mycomponents/addfilm/addfilm.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    OnemovieComponent,
    SearchmoviesComponent,
    UploadimageComponent,
    AddfilmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
