import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  public $categories = new BehaviorSubject<string[]>([]);
  private name= 'categories';

  constructor() {
    this.get();
  }

  get() {
    let value = localStorage.getItem(this.name);

    if (!value) {
      value = '[]'
      localStorage.setItem(this.name, value);
    }

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

  add(name: string): void {
    this.$categories.subscribe((categories: any): boolean => {
      if (categories.indexOf(name) !== -1) {
        return false;
      }
      categories.push(name);
      this.save(categories);
      return true;
    })
  }
}
