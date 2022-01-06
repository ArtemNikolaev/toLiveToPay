import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectInBudgetSpends} from "../state/selectors/inBudgetSpends.selector";
import * as dayjs from "dayjs";

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
    this.spends$.subscribe(
      data => {
        this.spends = [];
        data.forEach(el => {
          this.spends.push({
            date: el.date,
            sum: el.sum,
            time: dayjs.unix(el.time).format('hh:mm'),
            category: el.category,
            description: el.description,

          })
        })
      }
    )
  }

}
