import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-mobile-component',
  templateUrl: './mobile-component.component.html',
  styleUrls: ['./mobile-component.component.css']
})
export class MobileComponentComponent implements OnInit {

  constructor(private router:Router) { }
  mobiles=[
    {"id":1, "name":"Product Details"},
    {"id":2, "name":"Product Details"},
    {"id":3, "name":"Product Details"},
    {"id":4, "name":"Product Details"},
  ]
  ngOnInit() {
   
  }
  
  onSelect(det){
   
 this.router.navigate(["/mobiledetails",det.id]);
}
}
