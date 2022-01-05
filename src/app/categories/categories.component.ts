import { Component, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { Store } from '@ngrx/store';
import { selectCategories } from '../state/selectors';
import { add } from '../state/categories/categories.actions';

// todo: separate module for categories

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnDestroy {
  categories$ = this.store.select(selectCategories);
  newCategory = '';

  constructor(private store: Store) {
  }

  addCategory(payload: string) {
    this.store.dispatch(add({payload}));

    this.newCategory = '';
  }

  removeCategory(value: string) {
  }

  ngOnDestroy() {
  }
}
