import { Component } from '@angular/core';
import { selectDays } from '../../state/selectors';
import { Store } from '@ngrx/store';

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent {
  days$ = this.store.select(selectDays);

  constructor(private store: Store  ) {
  }

}
