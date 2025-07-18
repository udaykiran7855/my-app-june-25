import { Component } from '@angular/core';
import { StudentDetailsService } from '../student-details.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
 student:any[]=[];
          constructor(private _studentDetailsService:StudentDetailsService){
           this.loadCards();
  }
  loadCards(){
     this._studentDetailsService.getIdCard().subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
  }

   term:string='';
  search(){
    this._studentDetailsService.getfilteridcard(this.term).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert('Internal Server Error')
      }
    )
  }

   column:string='';
  order:string='';
  sort(){
    console.log(this.column,this.order);
    this._studentDetailsService.getsortedidcard(this.column,this.order).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
      },(err:any)=>{
        alert('Internal Server Error');
      }
    )
  }

  items:any='';
  page:any='';
  pagination(){
    console.log(this.items,this.page);
    this._studentDetailsService.getPaginatedidcard(this.items,this.page).subscribe(
      (data:any)=>{
        console.log(data);
        this.student=data;
     },(err:any)=>{
      alert('Internal Server Error')
     }
    )
  }

  delete(id:any){
  if(confirm('Are you sure to Delete')==true){
  this._studentDetailsService.deleteCard(id).subscribe(
     (data:any)=>{
        alert("Record deleted successfully");
        this.loadCards();
      },(err:any)=>{
        alert('Internal Server Error');
      }
  )
  }else{
    alert("You have Cancelled");
  }
}
   
  }


