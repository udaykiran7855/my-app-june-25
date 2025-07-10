import { Component } from '@angular/core';
import { CommmonService } from '../commmon.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css']
})
export class Sibling1Component {
  count:number=0;
  constructor(private _commmonService:CommmonService){}
  send(){
    this._commmonService.countSubject.next(this.count);
  }

}
