import { Component, Input } from '@angular/core';
import { SettingsComponent } from '../../settings/settings.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.css']
})
export class AppToolbarComponent {
  @Input() menuFn: Function | undefined;

  constructor(
    public dialog: MatDialog,
  ) { }

  openSettings() {
    this.dialog.open(SettingsComponent);
  }

  openMenu() {
    if (this.menuFn) this.menuFn();
  }
}
