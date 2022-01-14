import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import { AddSpendComponent } from '../../add-spend/add-spend.component';
import { SaveMoneyComponent } from '../../save-money/save-money.component';
import {selectDayBudget} from "../../state/publicSelectors/dayBudget.selector";

@Component({
  selector: 'day-budget',
  templateUrl: './day-budget.component.html',
  styleUrls: ['./day-budget.component.css']
})
export class DayBudgetComponent {
  budget$ = this.store.select(selectDayBudget);

  constructor(
    public dialog: MatDialog,
    private store: Store,
  ) { }

  openSpend() {
    this.dialog.open(AddSpendComponent);
  }

  openSave() {
    this.dialog.open(SaveMoneyComponent);
  }
}
