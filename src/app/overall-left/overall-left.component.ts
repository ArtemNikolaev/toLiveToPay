import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'overall-left',
  templateUrl: './overall-left.component.html',
  styleUrls: ['../widget.css', './overall-left.component.css']
})
export class OverallLeftComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSettings() {
    this.dialog.open(SettingsComponent);
  }
}
