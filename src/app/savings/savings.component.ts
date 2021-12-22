import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WithdrawComponent} from "../withdraw/withdraw.component";

@Component({
  selector: 'savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openWithdraw() {
    this.dialog.open(WithdrawComponent);
  }

}
