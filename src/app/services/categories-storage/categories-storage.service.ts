import { Injectable } from '@angular/core';
import {BehaviorSubject, first} from "rxjs";
import {StorageService} from "../storage/storage.service";

// todo: add category on press enter

@Injectable({
  providedIn: 'root'
})
export class CategoriesStorageService {
  private storageName= 'categories';
  public $categories = new BehaviorSubject<string[]>([]);

  constructor(private storage: StorageService, ) {
    this.updateStorage();
  }

  async updateStorage(): Promise<void> {
    let value: string[];
    try {
      value = await this.storage.get(this.storageName);
    } catch (e) {
      value = this.defaultValue();
      await this.storage.set(this.storageName, value);
    }

    console.log({value});

    this.$categories.next(value);
  }

  async save(values: string[]): Promise<boolean> {
    if (!Array.isArray(values)) {
      return false;
    }

    await this.storage.set(this.storageName, values);

    this.updateStorage();

    return true;
  }

  add(name: string): void {
    if (!name) return;

    this.$categories
      .subscribe((categories: any): boolean => {
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
      .pipe(first())
      .subscribe(categories => {
        const index = categories.indexOf(name);
        if (index === -1) return;

        categories.splice(index, 1);

        this.save(categories);
      });
  }

  defaultValue() {
    return [];
  }
}
