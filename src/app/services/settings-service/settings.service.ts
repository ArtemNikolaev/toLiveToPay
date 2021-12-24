import { Injectable } from '@angular/core';
import {BehaviorSubject, first} from "rxjs";
import * as dayjs from 'dayjs';
import {StorageService} from "../storage/storage.service";

export interface Settings {
  beginDate: string;
  endDate: string;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private storageName = 'settings';
  public $subject: BehaviorSubject<Settings>

  constructor(private storage: StorageService) {
    this.$subject = new BehaviorSubject(this.defaultValue());

    this.updateStorage();
  }

  async updateStorage() {
    let value: Settings;
    try {
      value = await this.storage.get(this.storageName);
      if (!this.validate(value)) throw 'Validation failed';
    } catch (e) {
      value = this.defaultValue();
      await this.storage.set(this.storageName, value);
    }

    this.$subject.next(value);
  }

  defaultValue(): Settings {
    return {
      beginDate: dayjs().format('YYYY-MM-DD'),
      endDate: dayjs().add(1, 'day').format('YYYY-MM-DD'),
      amount: 0,
    }
  }

  change(value: Settings) {
    if (!this.validate(value)) return;

    this.storage.set(this.storageName, value);

    this.$subject.next(value);
  }

  changeAmount(value: number) {
    if (!value) return;

    const subscription = this.$subject
      .pipe(first())
      .subscribe( (settings : Settings) => {
        settings.amount += value;
        this.change(settings);
      });
  }

  validate(data: Settings) {
    if (!data) return false;
    // todo: settings service validation
    return true;
  }
}
