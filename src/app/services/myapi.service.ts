import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../myclasses/Comment';

@Injectable({
  providedIn: 'root'
})
export class MyapiService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get('http://localhost:3000/api/movies')
  }

  getData2(url){
    return this.http.get(url)
  }

  postData(comment:Comment){console.log(comment);
    return this.http.post<any>("http://localhost:3000/api/comment",comment);
  }

}
