import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddSpendComponent} from "../add-spend/add-spend.component";
import {SaveMoneyComponent} from "../save-money/save-money.component";
import {DayBudgetInterface, DayBudgetService} from "./day-budget.service";
import {Observable} from "rxjs";

@Component({
  selector: 'day-budget',
  templateUrl: './day-budget.component.html',
  styleUrls: ['./day-budget.component.css']
})
export class DayBudgetComponent implements OnInit {
  public $subject: Observable<DayBudgetInterface>;

  constructor(public dialog: MatDialog,
              private service: DayBudgetService) {
    this.$subject = service.$subject;
    service.$subject.subscribe(console.log);
  }

  ngOnInit(): void {
  }

  openSpend() {
    this.dialog.open(AddSpendComponent);
  }

  openSave() {
    this.dialog.open(SaveMoneyComponent);
  }
}
