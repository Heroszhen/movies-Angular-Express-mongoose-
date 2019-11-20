import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../../services/myapi.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  allmovies:any;
  constructor(private myapi:MyapiService) { }

  ngOnInit() {
    this.myapi.getData().subscribe(data=>this.allmovies=data);
  }

}
