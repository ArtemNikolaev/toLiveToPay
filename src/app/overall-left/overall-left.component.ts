import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ChangeSumComponent} from "../change-sum/change-sum.component";

@Component({
  selector: 'overall-left',
  templateUrl: './overall-left.component.html',
  styleUrls: ['./overall-left.component.css']
})
export class OverallLeftComponent {

  constructor(public dialog: MatDialog) { }

  openChanges() {
    this.dialog.open(ChangeSumComponent)
  }
}
