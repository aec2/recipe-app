import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../loggin.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChanged: Subscription;

  constructor(private shoppingService: ShoppingService, private loggingService: LoggingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChanged = this.shoppingService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog('ShoppingListComponent Logged ngOnInit');

    }

  ngOnDestroy(): void {
    this.igChanged.unsubscribe();
  }
  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
