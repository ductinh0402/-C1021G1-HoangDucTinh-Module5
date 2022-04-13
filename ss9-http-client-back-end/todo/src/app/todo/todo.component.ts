import {Component, OnInit} from '@angular/core';
import {Todo} from '../models/todo';
import {FormControl, FormGroup} from '@angular/forms';
import {TodoService} from './todo.service';
import {ActivatedRoute} from '@angular/router';


let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  content = new FormControl();
  todo: FormGroup;

  constructor(private todoService: TodoService, private active: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.todoService.getAll().subscribe(data => {
      this.todos = data;
    });
    this.todo = new FormGroup({
      content: new FormControl('')
    });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todos.push(todo);
      this.content.reset();
    }
  }

  saveTodo() {
    this.todoService.save(this.todo.value).subscribe();
  }

  delete(id: any) {
    this.todoService.deleteTodo(id).subscribe(() => {
    }, e => console.log(e));
  }

  edit(id) {
    this.todoService.getById(this.active.snapshot.paramMap.get('id')).subscribe(data2 => {
      this.todo.setValue(data2);
    });
  }

  update() {
    this.todoService.update(this.active.snapshot.paramMap.get('id'), this.todo.value).subscribe();
  }
}
