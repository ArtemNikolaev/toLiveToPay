import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WithdrawComponent} from "../withdraw/withdraw.component";
import { Store } from '@ngrx/store';
import { selectSavingsCount } from '../state/selectors';

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
