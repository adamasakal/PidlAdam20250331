import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  private apiUrl = 'https://dummyjson.com/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  getRecipeById(id: string): Observable<any> {
    return this.http.get<any>(`https://dummyjson.com/recipes/${id}`);
  }
  
}
