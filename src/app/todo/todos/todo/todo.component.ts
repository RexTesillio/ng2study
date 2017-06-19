import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
    <div>
      <input type="checkbox">운동하기
    </div>
  `,
  styles: []
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
