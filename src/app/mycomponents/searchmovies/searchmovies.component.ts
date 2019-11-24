import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../../services/myapi.service';

@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  movies:any;
  inputsearch:string = "";
  constructor(private myapi:MyapiService) {
    this.inputsearch = this.myapi.search$.getValue()[0];
    if(this.inputsearch !== undefined && this.inputsearch != ""){
      let search = {
        "keywords":this.inputsearch
      };
      this.myapi.postData2(search).subscribe(data=>this.movies = data);
    }
  }

  ngOnInit() {
  }

  serchmovies(){
    if(this.inputsearch != '' || this.inputsearch !== undefined){
      let search = {
        "keywords":this.inputsearch
      };
      this.myapi.postData2(search).subscribe(data=>this.movies = data);
    }
  }

}
