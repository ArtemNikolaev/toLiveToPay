import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {SettingsService} from "../services/settings-service/settings.service";

@Component({
  selector: 'change-sum',
  templateUrl: './change-sum.component.html',
  styleUrls: ['./change-sum.component.css']
})
export class ChangeSumComponent {
  amount = new FormControl(0)

  constructor(private settingsService: SettingsService) { }

  onSave() {
    if (!this.amount.value) return;

    this.settingsService.changeAmount(this.amount.value)
  }
}
