import { Injectable } from '@angular/core';
import {BehaviorSubject, first} from "rxjs";
import * as dayjs from 'dayjs';
import {StorageService} from "../storage/storage.service";

// todo: remove this file and dependencies

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
  public $daysOverall = new BehaviorSubject<number>(0);
  public $daysLeft = new BehaviorSubject<number>(0);
  public $dayBudget = new BehaviorSubject<number>(0);

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

    this.calculate(value);
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

    this.calculate(value);
  }

  changeAmount(value: number) {
    if (!value) return;

    this.$subject
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

  calculate(value: Settings) {
    this.$subject.next(value);

    const today = dayjs().startOf('day');
    const endDate = dayjs(value.endDate).startOf('day').add(1, 'day');
    const beginDate = dayjs(value.beginDate).startOf('day');

    const daysOverall = endDate.diff(beginDate) / 1000 / 60 / 60 / 24;
    const daysLeft = endDate.diff(today) / 1000 / 60 / 60 / 24;
    const dayBudget = Math.floor(value.amount / daysOverall * 100) / 100;

    this.$daysOverall.next(daysOverall);
    this.$daysLeft.next(daysLeft);
    this.$dayBudget.next(dayBudget);
  }
}
