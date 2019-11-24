import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../myclasses/comment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  search$ = new BehaviorSubject([]);
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/api/movies')
  }

  getData2(url){
    return this.http.get(url)
  }

  postData(comment:Comment){
    return this.http.post<any>("http://localhost:3000/api/comment",comment);
  }
  postData2(search){
    return this.http.post("http://localhost:3000/api/searchmovies",search);
  }

  postData3(form){
    return this.http.post("http://localhost:3000/api/myimage",form);
  }
}
