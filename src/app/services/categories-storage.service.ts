import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  public $categories = new BehaviorSubject<string[]>([]);
  private name= 'categories';

  constructor() {
    this.update();
  }

  update() {
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

    this.update();

    return true;
  }

  add(name: string): void {
    if (!name) return;

    this.$categories.subscribe((categories: any): boolean => {
      if (categories.indexOf(name) !== -1) {
        return false;
      }
      categories.push(name);
      this.save(categories);
      return true;
    })
      .unsubscribe();
  }

  remove(name: string): void {
    if (!name) return;

    this.$categories
      .subscribe(categories => {
        const index = categories.indexOf(name);
        if (index === -1) return;

        categories.splice(index, 1);

        this.save(categories);
      })
      .unsubscribe();
  }
}
