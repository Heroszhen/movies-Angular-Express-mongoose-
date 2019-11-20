import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../../services/myapi.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../myclasses/Comment';

@Component({
  selector: 'app-onemovie',
  templateUrl: './onemovie.component.html',
  styleUrls: ['./onemovie.component.css']
})
export class OnemovieComponent implements OnInit {
  id:any;
  onemovie:any = "";
  comments:any;
  commentModel = new Comment("","","");
  constructor(private myapi:MyapiService,private route:ActivatedRoute) {
    this.route.params.subscribe( params =>{
      this.id = params.id;
      this.commentModel.idmovie = params.id;
      this.myapi.getData2("http://localhost:3000/api/movie/id/"+this.id).subscribe(data=>this.onemovie = data);
      this.myapi.getData2("http://localhost:3000/api/comments/idmovie/"+this.id).subscribe(data=>this.comments = data);
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    this.myapi.postData(this.commentModel).subscribe(data=>{
      this.comments=data;
      this.commentModel.reset();
    });
  }
}
