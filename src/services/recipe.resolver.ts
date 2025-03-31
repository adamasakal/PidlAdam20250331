import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RecipesService } from '../app/recipes.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<any> {
  constructor(private recipesService: RecipesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const id = route.paramMap.get('id');
    return this.recipesService.getRecipeById(id!);
  }
}
