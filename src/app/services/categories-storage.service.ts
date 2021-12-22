import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  public $categories = new Subject<string[]>();
  private name= 'categories';

  constructor() {
    this.validate();

    this.get();
  }

  get() {
    this.validate();

    const value = localStorage.getItem(this.name) || '';

    this.$categories.next(JSON.parse(value));
  }

  save(values: string[]): boolean {
    if (!Array.isArray(values)) {
      return false;
    }

    localStorage.setItem(this.name, JSON.stringify(values));

    this.get();

    return true;
  }

  validate() {
    if (!localStorage.getItem(this.name)) {
      localStorage.setItem(this.name, '[]');
    }
  }
}
