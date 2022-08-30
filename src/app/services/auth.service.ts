import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient ,private router: Router) { }

  api = "https://localhost:44398/api/Auth/login/famous"

  isAuthenticated():boolean{
    return localStorage.getItem("isAuthenticated") ? true : false 
}

// any == famous 
login(userName: string, password: string): Observable<any> {
  let obs=this.http.post<any>(this.api,{name:userName,password:password})
  obs.subscribe(
    data => {
      localStorage.setItem("isAuthenticated",data.token);
      console.log(data); 
      this.router.navigate(['/famous']);
    });
    ;
    if(this.isValidToken()){
      ;
    }
  return obs ;
}

logout(): void {
  localStorage.removeItem("isAuthenticated");
  this.router.navigate(['/welcome']);
}

private isValidToken():boolean{
  //to be refactored
  return true ; 
}
}