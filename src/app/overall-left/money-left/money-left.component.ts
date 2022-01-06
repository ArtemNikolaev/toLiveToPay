import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectMoneyLeft } from '../../state/selectors';

@Component({
  selector: 'money-left',
  templateUrl: './money-left.component.html',
  styleUrls: ['./../left.css']
})
export class MoneyLeftComponent {
  moneyLeft$ = this.store.select(selectMoneyLeft);

  constructor(private store: Store) {
  }

}
