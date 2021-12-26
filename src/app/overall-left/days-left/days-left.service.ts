import { Injectable } from '@angular/core';
import {SettingsService} from "../../services/settings-service/settings.service";
import {BehaviorSubject} from "rxjs";
import * as dayjs from "dayjs";

export interface TotalLeft {
  total: number;
  left: number;
}

@Injectable({
  providedIn: 'root'
})
export class DaysLeftService{
  $subject = new BehaviorSubject<TotalLeft>({
    total: 0,
    left: 0,
  });

  constructor(
    private settingsService: SettingsService
  ) {
    settingsService.$subject.subscribe(settings => {
      const result: TotalLeft = {
        total: 0,
        left: 0,
      };

      {
        const today = dayjs().startOf('day');
        const endDate = dayjs(settings.endDate).startOf('day').add(1, 'day');
        const beginDate = dayjs(settings.beginDate).startOf('day');

        result.total = endDate.diff(beginDate) / 1000 / 60 / 60 / 24;
        result.left = endDate.diff(today) / 1000 / 60 / 60 / 24;
      }

      this.$subject.next(result);
    })
  }
}
