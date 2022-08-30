import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FamousService {
  api = "https://localhost:44398/api/Famous/all"
  constructor(private http : HttpClient) { }
  getAllFamous(){
    return this.http.get<any>(this.api) ; 
  }
}
