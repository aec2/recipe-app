import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription;

  constructor(private shoppingService: ShoppingService) {}
  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChanged = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    console.log(this.ingredients);
  }
}
