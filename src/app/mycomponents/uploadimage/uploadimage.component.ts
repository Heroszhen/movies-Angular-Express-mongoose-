import { Component, OnInit } from '@angular/core';
import { MyapiService } from '../../services/myapi.service';

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  filetoupload: File = null;
  filetouploadname:string = "";
  constructor(private myapi:MyapiService) { }

  ngOnInit() {
  }

  handleFileInput(file:FileList){
    this.filetoupload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
      //this.imageurl = event.target.result;
    }
    reader.readAsDataURL(this.filetoupload);
    this.filetouploadname = this.filetoupload.name;
    //console.log(this.filetoupload);
  }

  addOnePhoto(){
    var myform:FormData = new FormData();
    myform.append("image",this.filetoupload);console.log(myform);
    this.myapi.postData3(myform).subscribe(data=>{console.log(data)});
  }
}
