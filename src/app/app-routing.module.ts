import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ReadRecipeComponent } from './read-recipe/read-recipe.component';
import { UpdateRecipeComponent } from './update-recipe/update-recipe.component';
import { RecipeResolver } from '../services/recipe.resolver';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    children: [
      { path: 'read/:id', component: ReadRecipeComponent },
      { path: 'update/:id', component: UpdateRecipeComponent },
    ],
  },
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: '**', redirectTo: '/recipes' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
