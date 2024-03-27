import { Component } from '@angular/core';
import {TodoService} from "../../services/todo.service";
import {Todo} from "../../models/todo.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos:Todo[];
  selectedId:number;

  constructor(private todoService:TodoService, private router:Router) {
  }
  ngOnInit():void {
    this.todoService.getAll().subscribe({
      next: (data) => this.todos = data
    });
  }

  directToDetail():void {
    this.router.navigate([`todos/${this.selectedId}`]).then();
  }

}
