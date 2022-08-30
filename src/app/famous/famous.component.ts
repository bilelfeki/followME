import { Component, OnInit } from '@angular/core';
import { FamousService } from '../services/famous.service';

@Component({
  selector: 'app-famous',
  templateUrl: './famous.component.html',
  styleUrls: ['./famous.component.css']
})
export class FamousComponent implements OnInit {

  famousList:any= []
  toggle =true ; 
  constructor(private famousService : FamousService) { }

  ngOnInit(): void {
    this.famousService.getAllFamous().subscribe(data=>{
      this.famousList.push(data) ; 
      console.log(data) ; 
      console.log(data[0].name)
    }) ;
  }
  onclickButton(){
    this.toggle = !this.toggle ;
  }
}
