import { Component, OnInit } from '@angular/core';
import {CategoriesStorageService} from "../services/categories-storage.service";

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories : string[] = [];
  newCategory: string = '';

  constructor(private categoriesService: CategoriesStorageService) { }

  ngOnInit(): void {
    this.categoriesService.$categories.subscribe(categories => this.categories = categories);
    this.categoriesService.save(['bla', 'bla12', 'alsdkfja;'])
  }

  addCategory(value: string) {
    this.categoriesService.add(value);

    this.newCategory = '';
  }
}
