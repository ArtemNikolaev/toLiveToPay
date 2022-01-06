import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { add, remove } from '../state/categories/categories.actions';
import {selectCategories} from "../state/selectors/categories.selector";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories$ = this.store.select(selectCategories);
  newCategory = '';

  constructor(private store: Store) {
  }

  addCategory(payload: string) {
    this.store.dispatch(add({payload}));

    this.newCategory = '';
  }

  removeCategory(payload: string) {
    this.store.dispatch(remove({payload}))
  }

}
