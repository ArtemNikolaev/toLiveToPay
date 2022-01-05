import { Component, OnDestroy } from '@angular/core';
import { CategoriesStorageService } from "../services/categories-storage/categories-storage.service";
import { Subscription } from "rxjs";

// todo: separate module for categories

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnDestroy {
  categoriesSubscription: Subscription;
  categories : string[] = [];
  newCategory: string = '';

  constructor(private categoriesService: CategoriesStorageService) {
    this.categoriesSubscription = this.categoriesService.$categories.subscribe(categories => {
      this.categories = categories;
    });
  }

  addCategory(value: string) {
    this.categoriesService.add(value);

    this.newCategory = '';
  }

  removeCategory(value: string) {
    this.categoriesService.remove(value);
  }

  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }
}
