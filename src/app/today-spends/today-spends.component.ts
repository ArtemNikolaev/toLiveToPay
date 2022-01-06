import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {selectInBudgetSpends} from "../state/selectors/inBudgetSpends.selector";

@Component({
  selector: 'today-spends',
  templateUrl: './today-spends.component.html',
  styleUrls: ['./today-spends.component.css']
})
export class TodaySpendsComponent {
  spends$ = this.store.select(selectInBudgetSpends);
  displayedColumns: string[] = ['time', 'sum', 'category', 'description'];

  constructor(
    private store: Store,
  ) { }

}
