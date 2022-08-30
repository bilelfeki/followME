import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public  username ="" ;
  public password = ""; 
  submitted = false;

  constructor(private auth : AuthService ) { }

  ngOnInit(): void {
  }

  isLogIn():boolean{
    return false 
  }
  onSubmit() { 
    console.log("hello")
    this.auth.login(this.username,this.password).subscribe(data =>
      console.log(data)
    )
   }


  

}
