import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  api = "https://localhost:5001/Auth/login/famous"
  isAuthenticated():boolean{
  //  return localStorage.getItem("isAuthenticated") ? true : false 
  return true ; 
}

login(userName: string, password: string): Observable<any> {
  console.log(userName);
  console.log(password);
  return this.http.post(this.api,{userName,password})
}
}