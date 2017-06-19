import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  today: Date = new Date();
  newText='';
  todos: {
    done: boolean,
    text: string
  }[];

  constructor() { 
    this.todos = [
      {done: false, text: '운동하기'},
      {done: true, text: '공부하기'}
    ];
  }

  ngOnInit() {
  }
  toggleTodo(todo){
    todo.done=!todo.done;
  }
  addTodo(text: string){
    this.todos.push({
      done: false,
      text: text
    });
  }
}
