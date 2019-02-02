import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from './models/category.model';

@Injectable()
export class AdvItemService {

  constructor(private http: HttpClient, private router:Router) { }
 
  public getAllItems(): Observable<any>{
    return this.http.get(`http://localhost:8085/api/item/all`);
  }

  public addNewCategory(category): Observable<any>{
    return this.http.post<Category>('http://localhost:8085/api/home/category/add',category);
  }
}
