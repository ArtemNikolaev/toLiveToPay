import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaysLeft } from '../../models/overallLeft.model';
import { selectDaysLeft } from '../../state/selectors/daysLeft.selector';

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent {
  days$: Observable<DaysLeft> = this.store.select(selectDaysLeft);

  constructor(private store: Store  ) {
  }

}
