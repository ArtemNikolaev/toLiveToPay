import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest} from "rxjs";
import * as dayjs from "dayjs";
import {SpendsStorageService} from "../../services/spends-service/spends-storage.service";
import { Store } from '@ngrx/store';
import { selectSettings } from '../../state/selectors';

@Injectable({
  providedIn: 'root'
})
export class MoneyLeftService {
  settings$ = this.store.select(selectSettings);

  $subject = new BehaviorSubject<any>({
    total: 0,
    daysLeft: 0,
  });

  constructor(
    private store: Store,
    private spendsService: SpendsStorageService,
  ) {
    combineLatest({
      settings: this.settings$,
      spends: spendsService.$subject,
    }).subscribe(({settings, spends}) => {

      const result = {
        total: settings.amount,
        daysLeft: 0
      };

      {
        const endDate = dayjs(settings.endDate).startOf('day').add(1, 'day').unix();
        const beginDate = dayjs(settings.beginDate).startOf('day').unix();

        result.daysLeft = result.total - spends
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
