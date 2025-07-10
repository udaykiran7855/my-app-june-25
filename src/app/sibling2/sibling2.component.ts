import { Component } from '@angular/core';
import { CommmonService } from '../commmon.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css']
})
export class Sibling2Component {
  count:number=0;
    constructor(private _commmonService:CommmonService){
      _commmonService.countSubject.subscribe(
        (data:any)=>{
        console.log(data);
        this.count=data;

      },(err:any)=>{
        alert("Internal Server Error")
      }
      )
      
      }
    }
  


