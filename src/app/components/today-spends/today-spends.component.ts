import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectInBudgetSpends} from "../../state/selectors/inBudgetSpends.selector";
import * as dayjs from "dayjs";
import * as utc from 'dayjs/plugin/utc'
import {rm} from "../../state/spends/spends.actions";
import {Spend} from "../../models/spends.model";

@Component({
  selector: 'today-spends',
  templateUrl: './today-spends.component.html',
  styleUrls: ['./today-spends.component.css']
})
export class TodaySpendsComponent {
  spends : any = [];
  spends$ = this.store.select(selectInBudgetSpends);
  displayedColumns: string[] = ['time', 'sum', 'category', 'description'];

  constructor(
    private store: Store,
  ) {
    dayjs.extend(utc)

    this.spends$.subscribe(
      data => {
        this.spends = [];
        data.forEach(el => {
          this.spends.push({
            date: el.date,
            sum: el.sum,
            // todo: Костыль - убрать
            time: dayjs.unix(el.time).utc().format('hh:mm'),
            category: el.category,
            description: el.description,

          })
        })
      }
    )
  }

  removeSpend(spend: Spend) {
    // spend.time = dayjs(spend.time, 'HH:mm');
    this.store.dispatch(rm({payload: spend}));
  }
}
