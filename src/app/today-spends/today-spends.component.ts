import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSpends } from '../state/selectors/main';

@Component({
  selector: 'today-spends',
  templateUrl: './today-spends.component.html',
  styleUrls: ['./today-spends.component.css']
})
export class TodaySpendsComponent {
  spends$ = this.store.select(selectSpends);
  displayedColumns: string[] = ['time', 'sum', 'category', 'description'];

  constructor(
    private store: Store,
  ) { }

}
