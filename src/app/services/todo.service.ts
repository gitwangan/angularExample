import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Todo} from "../models/todo.model";
import {HttpClient} from "@angular/common/http";

const url = 'https://jsonplaceholder.typicode.com/todos'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Todo[]> {
    return this.http.get<Todo[]>(url);
  }

  getById(id:number):Observable<Todo> {
    return this.http.get<Todo>(`${url}/${id}`);
  }

  deleteById(id:number):Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }

}
