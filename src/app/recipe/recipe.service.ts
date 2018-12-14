import { Injectable } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class RecipeService {
recipesChanged=new Subject<Recipe[]>();



  //property:class recipe
  private recipes:Recipe[]=[
    new Recipe('ikan hias','Ikan hias adalah jenis ikan baik yang berhabitat di air tawar maupun di laut yang dipelihara bukan untuk konsumsi melainkan untuk memperindah taman/ruang tamu.',
  'https://istanakoi.files.wordpress.com/2013/01/ikankoi.jpg',
  [
    new Ingredient('Koi',1),
    new Ingredient('Cupang',2),
  ]),

  new Recipe('ikan konsumsi','Ikan konsumsi adalah macam ikan yang dapat dikonsumsi atau aman dimakan oleh manusia..misalnya ikan gurame,mujair,tenggiri,dll.','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR32kLyOdkvcz8SaFGFkzJEV5Xa5jdwqjnC9tR4LyL69uaniUo',
[
  new Ingredient('Lele',1),
  new Ingredient('Gurami',1),
  new Ingredient('Mujaer',1)
]),  
];

  getRecipes(){
    return this.recipes.slice();
  }
  //tambahkan method addIngredientsShoppingList dengan parameter ingredient[]
  addIngredientsShoppingList(ingredients: Ingredient[]){
    this.slsService.addIngredients(ingredients);
  }
  getRecipe(index:number){
    return this.recipes [index] ;
  }
  //tambahkan parameter pada construktor
constructor(private slsService: ShoppingListService) {}

setRecipes(recipes: Recipe[]){
  this.recipes= recipes;
  this.recipesChanged.next(this.recipes.slice());
}

addRecipe(recipe: Recipe){
this.recipes.push(recipe);
this.recipesChanged.next(this.recipes.slice());
}
updateRecipe(index: number, newRecipe: Recipe){
this .recipes[index]= newRecipe;
this.recipesChanged.next(this.recipes.slice());
}
deleteRecipe(index: number){
  this.recipes.splice(index, 1);
  this.recipesChanged.next(this.recipes.slice());
}
}