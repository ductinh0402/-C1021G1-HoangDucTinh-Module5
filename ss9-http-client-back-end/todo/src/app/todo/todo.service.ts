import {Injectable} from '@angular/core';

import {Todo} from '../models/todo';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  URL_TODO = ' http://localhost:3000/todo';

  constructor(private http: HttpClient) {
  }

  getAll(): any {
    return this.http.get(this.URL_TODO).pipe(map(res => res));
  }

  deleteTodo(id: number) {
    return this.http.delete<Todo>(this.URL_TODO + '/' + id);
  }
  save(data: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.URL_TODO, data);
  }
  getById(id) {
    return this.http.get(`${this.URL_TODO}/${id}`);
  }
  update(id, data) {
    return this.http.put(`${this.URL_TODO}/${id}`, data);
  }
}
