import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WithdrawComponent} from "../withdraw/withdraw.component";
import {SavingsService} from "./savings.service";

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  $savings;

  constructor(
    public dialog: MatDialog,
    private savings: SavingsService
  ) {
    this.$savings = savings.$subject;
  }

  ngOnInit(): void {
  }

  openWithdraw() {
    this.dialog.open(WithdrawComponent);
  }

}
