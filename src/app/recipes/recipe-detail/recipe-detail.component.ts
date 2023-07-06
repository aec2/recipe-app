import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: Recipe;
  isShow: boolean = false;
  constructor(private recipeService: RecipeService) {}

  btnClicked(openDropDown: boolean) {
    this.isShow = openDropDown;
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
