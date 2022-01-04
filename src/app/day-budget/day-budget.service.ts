import { Injectable } from '@angular/core';
import {combineLatest, Observable} from "rxjs";
import {SettingsService} from "../services/settings-service/settings.service";

export interface DayBudgetInterface {
  dayBudget: number
}

@Injectable({
  providedIn: 'root'
})
export class DayBudgetService {
   $subject: Observable<DayBudgetInterface>;

  constructor(
    private settingsService: SettingsService,
  ) {
    this.$subject = combineLatest({
      dayBudget: settingsService.$dayBudget,
    })
  }
}
