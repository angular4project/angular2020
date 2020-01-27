import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router' ;
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private router:Router) { }
//   category  =
// [
//   {"id":1,"name":"labtop"},
//   {"id":2,"name":"mobile"},
//   {"id":3,"name":"camera"}
// ]
  ngOnInit() {
  }

  // OnSelect(category){
  //   this.router.navigate(["/Products", category.id]);
  // }
}
