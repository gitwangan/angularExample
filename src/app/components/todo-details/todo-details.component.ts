import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Router} from "@angular/router";
import {Todo} from "../../models/todo.model";

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent {
  id:number;
  todo:Todo;
  constructor(private todoService:TodoService, private router:Router) {
  }

  ngOnInit():void {
    this.id = Number.parseInt(this.router.url.substring(this.router.url.lastIndexOf("/") + 1));
    this.todoService.getById(this.id).subscribe({
      next: (data) => this.todo = data
    });
  }

  deleteTodo():void {
    this.todoService.deleteById(this.id).subscribe({
      complete: ()=> {
        alert(`Todo ${this.id} is deleted.`);
        this.router.navigate(['']).then();
      }
    });
  }

}
