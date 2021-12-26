import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest} from "rxjs";
import {SettingsService} from "../../services/settings-service/settings.service";
import * as dayjs from "dayjs";
import {TotalLeft} from "../days-left/days-left.service";
import {SpendsStorageService} from "../../services/spends-service/spends-storage.service";

@Injectable({
  providedIn: 'root'
})
export class MoneyLeftService {

  $subject = new BehaviorSubject<TotalLeft>({
    total: 0,
    left: 0,
  });

  constructor(
    private settingsService: SettingsService,
    private spendsService: SpendsStorageService,
  ) {
    combineLatest({
      settings: settingsService.$subject,
      spends: spendsService.$subject,
    }).subscribe(({settings, spends}) => {

      const result: TotalLeft = {
        total: settings.amount,
        left: 0
      };

      {
        const endDate = dayjs(settings.endDate).startOf('day').add(1, 'day').unix();
        const beginDate = dayjs(settings.beginDate).startOf('day').unix();

        result.left = result.total - spends
          .filter(spend => {
            const date = spend.date + spend.time;

            return date > beginDate && date < endDate;
          })
          .reduce((previousValue, currentValue) => previousValue + currentValue.sum, 0);
      }


      this.$subject.next(result);
    });
  }
}
