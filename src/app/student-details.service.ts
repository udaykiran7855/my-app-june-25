import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailsService {
  constructor(private _httpClient:HttpClient) { }
  getstudentdetails():Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");

  }
  getfilterstudentdetails(term:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?filter="+term);


  }
  getsortedstudentdetails(column:any,order:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?sortBy="+column+'&order='+order);


  }
  getPaginatedstudentdetails(items:any,page:any):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student?limit="+items+'&page='+page);
    
  }
  deleteCard(id:any):Observable<any>{
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/student/"+id);
  }
}


