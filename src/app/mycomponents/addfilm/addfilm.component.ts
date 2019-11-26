import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MyapiService } from '../../services/myapi.service';

@Component({
  selector: 'app-addfilm',
  templateUrl: './addfilm.component.html',
  styleUrls: ['./addfilm.component.css']
})
export class AddfilmComponent implements OnInit {

  filmForm:FormGroup;
  movies;
  constructor(private fb : FormBuilder,private myapi:MyapiService) { 
    this.createForm();
    this.myapi.getData().subscribe(data=>{this.movies = data});
  }

  ngOnInit() {
  }

  createForm(){
    this.filmForm = this.fb.group({
      filmtitle:['',Validators.required],
      filmlast:['',[Validators.required,Validators.min(60)]],
      filmstarring:['',Validators.required],
      filmimage:['',Validators.required],
      filmplot:['',[Validators.required,Validators.minLength(20)]]
    });
  }

  onSubmit(){
    this.myapi.postData4(this.filmForm.value).subscribe(data=>{
      this.movies = data;
    });
    this.filmForm.reset();
  }

  deleteOneMovie(id){
    this.myapi.deletData(id).subscribe(data=>{console.log(data);
      this.movies = data;
    });
  }
}
