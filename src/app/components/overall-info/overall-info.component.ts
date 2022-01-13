import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMoneyInfo } from '../../state/publicSelectors/moneyInfo.selector';
import { selectDaysInfo } from '../../state/selectors/daysInfo.selector';

@Component({
  selector: 'overall-left',
  templateUrl: './overall-info.component.html',
  styleUrls: ['./overall-info.component.css']
})
export class OverallInfoComponent {
  money$ = this.store.select(selectMoneyInfo);
  days$ = this.store.select(selectDaysInfo);

  constructor(
    private store: Store
  ) { }
}
