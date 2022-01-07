import { Component, OnInit } from '@angular/core';
import { SettingsComponent } from '../../settings/settings.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSettings() {
    this.dialog.open(SettingsComponent);
  }

  openMenu() {
    this._snackBar.open('Когда-нибудь потом', 'Понял!', { duration: 1000});
  }
}
