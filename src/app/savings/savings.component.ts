import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WithdrawComponent} from "../withdraw/withdraw.component";
import {SavingsService} from "./savings.service";

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent {
  $savings;

  constructor(
    public dialog: MatDialog,
    private savings: SavingsService
  ) {
    this.$savings = savings.$subject;
  }

  openWithdraw() {
    this.dialog.open(WithdrawComponent);
  }

}
