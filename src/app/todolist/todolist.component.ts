import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todo:string
  list:string[]=[]

  constructor() { }

  ngOnInit(): void {
  }
  appendList()
  {
    if(this.todo != undefined && this.todo !="")
    {
      if(this.list.length==0)
    {this.list[0]= this.todo}
    else
    {this.list[this.list.length]=this.todo}
    console.log(this.list)
    }
  }

}
