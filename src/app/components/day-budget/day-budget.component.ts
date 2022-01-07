import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import { selectBudgetInfo } from '../../state/selectors/budgetInfo.selector';
import { AddSpendComponent } from '../../add-spend/add-spend.component';
import { SaveMoneyComponent } from '../../save-money/save-money.component';

@Component({
  selector: 'day-budget',
  templateUrl: './day-budget.component.html',
  styleUrls: ['./day-budget.component.css']
})
export class DayBudgetComponent {
  budget$ = this.store.select(selectBudgetInfo);

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
