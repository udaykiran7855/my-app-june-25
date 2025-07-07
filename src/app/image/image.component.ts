import { Component } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent {
  image:any[]=[]
  constructor(private _imageService:ImageService){
    _imageService.getImage().subscribe(
      (data:any)=>{
        console.log(data);
        this.image=data;

      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )

  }


}
