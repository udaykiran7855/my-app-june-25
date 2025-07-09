import { Component } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentdetails:any[]=[]
  constructor(private _studentdetailsService:StudentDetailsService){
   _studentdetailsService.getstudentdetails().subscribe(
    (data:any)=>{
      console.log(data);
      this.studentdetails=data;
      
    },(err:any)=>{
      alert("Inernal Server Error");
    }

   )
  }

}
