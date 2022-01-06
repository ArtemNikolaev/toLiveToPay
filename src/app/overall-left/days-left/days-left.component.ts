import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DaysInfo } from '../../models/overallInfo.model';
import { selectDaysInfo } from '../../state/selectors/daysInfo.selector';

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent {
  days$: Observable<DaysInfo> = this.store.select(selectDaysInfo);

  constructor(private store: Store  ) {
  }

}
