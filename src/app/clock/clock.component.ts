import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent {
  user:User={
    name:'uday',
    mobile:9848745677,
    email:'udaykiran@gmail.com',
    age:29
  }

}
