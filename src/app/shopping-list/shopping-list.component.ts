import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients :Ingredient[];
  private subscription: Subscription;
  
  constructor(private slsService:ShoppingListService) { }

  ngOnInit() {
    this.ingredients  = this.slsService.getIngredients();
    this.subscription = this.slsService.ingredientsChanged
    .subscribe(
      (ingredient:Ingredient[])=>{
        this.ingredients=ingredient;
      }
    );
  }

  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
