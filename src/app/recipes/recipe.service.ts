import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetti Bolognese',
      'Classic Italian pasta dish',
      'https://www.errenskitchen.com/wp-content/uploads/2018/08/Spaghetti-Bolognese-1-3.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Potato', 5)]
    ),
    new Recipe(
      'Chicken Tikka Masala',
      'Flavorful Indian curry',
      'https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Onian', 5),
        new Ingredient('Potato', 2),
      ]
    ),
    new Recipe(
      'Beef Tacos',
      'Mexican-style soft tacos',
      'https://img.taste.com.au/R_dRdL7V/taste/2022/09/healthy-tacos-recipe-181113-1.jpg',
      [new Ingredient('Bread', 1), new Ingredient('Marul', 3)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngrediens(ingredients);
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }
}
