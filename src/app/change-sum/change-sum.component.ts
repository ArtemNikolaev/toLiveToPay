import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {SettingsService} from "../services/settings-service/settings.service";

@Component({
  selector: 'change-sum',
  templateUrl: './change-sum.component.html',
  styleUrls: ['./change-sum.component.css']
})
export class ChangeSumComponent implements OnInit {
  amount = new FormControl(0)

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
  }

  onSave() {
    if (!this.amount.value) return;

    this.settingsService.changeAmount(this.amount.value)
  }
}
