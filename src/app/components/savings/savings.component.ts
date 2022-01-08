import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { selectSavingsCount } from '../../state/selectors/savingsCount.selector';
import { WithdrawComponent } from '../../withdraw/withdraw.component';

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent {
  savings$ = this.store.select(selectSavingsCount);

  constructor(
    private store: Store,
    public dialog: MatDialog,
  ) { }

  openWithdraw() {
    this.dialog.open(WithdrawComponent);
  }

}
