import { Component } from '@angular/core';
import { MapsService } from '../maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent {

  maps:any[]=[]
  constructor(private _mapsService:MapsService){
     _mapsService.getmaps().subscribe(
       (data:any)=>{
        console.log(data);
        this.maps=data;
        
      },(err:any)=>{
        alert("Internal Server Error!");
      }
    )



  }

}
