import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor(private _httpClient:HttpClient){ }

  getVehicles():Observable<any>{
    return this._httpClient.get("/assets/data.json")
  }

  getVehicle(id:number):Observable<any>{
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id)
    
  }
}

