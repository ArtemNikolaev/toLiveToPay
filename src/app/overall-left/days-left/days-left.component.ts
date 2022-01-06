import { Component } from '@angular/core';
import { selectDays } from '../../state/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaysLeft } from '../../models/overallLeft.model';

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent {
  days$: Observable<DaysLeft> = this.store.select(selectDays);

  constructor(private store: Store  ) {
  }

}
