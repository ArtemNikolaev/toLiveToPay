import { Injectable } from '@angular/core';
import {BehaviorSubject, combineLatest} from "rxjs";
import * as dayjs from "dayjs";
import { Store } from '@ngrx/store';
import { selectSettings, selectSpends } from '../../state/selectors';

@Injectable({
  providedIn: 'root'
})
export class MoneyLeftService {
  settings$ = this.store.select(selectSettings);
  spends$ = this.store.select(selectSpends);

  $subject = new BehaviorSubject<any>({
    total: 0,
    daysLeft: 0,
  });

  constructor(
    private store: Store,
  ) {
    combineLatest({
      settings: this.settings$,
      spends: this.spends$,
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
