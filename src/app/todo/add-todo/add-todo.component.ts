import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  template: `
  <div>
    <button (click)="addTodo(newText)">Add</button>
    <input type="text" placeholder="할 일 추가" [(ngModel)]="newText">  
  </div>
`,
  styles: [`
  :host {
    display: block;
    padding: 16px;
    background-color: white;
  }
  input {
    display: inline-block;
    font-size: 18px;
    border: none;
  }
  input: focus, button:focus {
    outline: none;
  }
  `]
})
export class AddTodoComponent implements OnInit {

  @Output()
  onTodoAdded = new EventEmitter();
  newText: string;
  constructor() { }

  ngOnInit() {
  }
  addTodo(newText: string) {
    this.onTodoAdded.emit(newText);
    this.newText = '';
  }
}
