import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: any[] = [];

  constructor(private recipesService: RecipesService, private router: Router) {}

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe((data) => {
      this.recipes = data.recipes;
    });
  }

  viewRecipe(id: number): void {
    this.router.navigate(['recipes/read', id]);
  }

  editRecipe(id: number): void {
    this.router.navigate(['recipes/update', id]);
  }
}
