import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 2),
    new Ingredient('Garlic cloves', 3),
    new Ingredient('Olive Oil', 1),
    new Ingredient('Chicken Breasts', 2),
    new Ingredient('Salt', 1),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngrediens(ingredients: Ingredient[]) {
    // for (const ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
