import { Component } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-id',
  templateUrl: './create-id.component.html',
  styleUrls: ['./create-id.component.css']
})
export class CreateIdComponent {
  public studentForm:FormGroup = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      dob:new FormControl(),
      city:new FormControl(),
      profile_picture:new FormControl(),

    })

    constructor(private _studentDetailsService:StudentDetailsService,private _router:Router){}

    submit(){
      console.log(this.studentForm.value);
      this._studentDetailsService.createStuentId(this.studentForm.value).subscribe(
        (data:any)=>{
          alert("Student reccord add Successfully");
          this._router.navigateByUrl("/dashboard/student-details");
        },(error:any)=>{
          alert("Internal Server Error")
        }
      )
    }

}
