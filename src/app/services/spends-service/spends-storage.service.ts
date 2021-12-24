import { Injectable } from '@angular/core';
import {BehaviorSubject, first} from "rxjs";
import {StorageService} from "../storage/storage.service";

export interface Spend {
  date: number;
  time: number;
  sum: number;
  description?: string;
  category?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpendsStorageService {
  private storageName = 'spends';
  public $subject: BehaviorSubject<Spend[]>;

  constructor(private storage: StorageService) {
    this.$subject = new BehaviorSubject(this.defaultValue());

    this.updateStorage();
  }

  async updateStorage() {
    let value: Spend[];
    try {
      value = await this.storage.get(this.storageName);
      if (!this.validate(value)) throw 'Validation failed';
    } catch (e) {
      value = this.defaultValue();
      await this.storage.set(this.storageName, value);
    }

    this.$subject.next(value);
  }

  save(spends: Spend[]) {
    if (!this.validate(spends)) return;

    this.storage.set(this.storageName, spends);
  }

  add(spend: Spend) {
    if (!this.validate([spend])) return;

    this.$subject
      .pipe(first())
      .subscribe(spends => {
        spends.push(spend);

        this.save(spends);
      })
  }

  defaultValue(): Spend[] {
    return [];
  }

  validate(data: Spend[]) {
    if (!data) return false;
    // todo: spends service validation
    return true;
  }
}
