import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodosComponent} from "./components/todos/todos.component";
import {TodoDetailsComponent} from "./components/todo-details/todo-details.component";

const routes: Routes = [
  {path:'', redirectTo:'todos', pathMatch:'full'},
  {path:'todos', component: TodosComponent}, {path: 'todos/:id', component: TodoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
