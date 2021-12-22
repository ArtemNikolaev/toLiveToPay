import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddSpendComponent} from "../add-spend/add-spend.component";
import {SaveMoneyComponent} from "../save-money/save-money.component";

@Component({
  selector: 'day-budget',
  templateUrl: './day-budget.component.html',
  styleUrls: ['./day-budget.component.css']
})
export class DayBudgetComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSpend() {
    this.dialog.open(AddSpendComponent);
  }

  openSave() {
    this.dialog.open(SaveMoneyComponent);
  }
}
