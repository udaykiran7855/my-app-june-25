import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommmonService {
  public countSubject:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor() { }
}
