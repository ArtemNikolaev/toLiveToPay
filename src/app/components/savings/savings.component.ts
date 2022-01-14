import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import { Store } from '@ngrx/store';
import { WithdrawComponent } from '../../withdraw/withdraw.component';
import {selectSavingsMoney} from "../../state/selectors/spends.selector";

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent {
  savings$ = this.store.select(selectSavingsMoney);

  constructor(
    private store: Store,
    public dialog: MatDialog,
  ) { }

  openWithdraw() {
    this.dialog.open(WithdrawComponent);
  }

}
