import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todo:string
  list:string[]=[]

  a:number
  b:number
  m:string[]=[]
  
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
       this.todo=""
    }
   }
  del(item:string)
  {
    this.a=this.list.indexOf(item)
    this.list.splice(this.a,1)
    console.log(this.list,"spliced")
  }
  mov(item:string)
  { this.m.push(item)
    this.b=this.list.indexOf(item)
    this.list.splice(this.b,1) 
  }

}
