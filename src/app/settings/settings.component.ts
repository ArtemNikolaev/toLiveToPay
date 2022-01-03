import {Component, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import {Settings, SettingsService } from '../services/settings-service/settings.service';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  settingsForm = new FormGroup({
    amount : new FormControl('0'),
    beginDate : new FormControl(''),
    endDate : new FormControl(''),
  });
  minBeginDate: string | undefined;
  minEndDate: string | undefined;

  constructor(private settingService: SettingsService) {
    this.subscription = settingService.$subject.subscribe((value: Settings) => {
      this.settingsForm.setValue(value);
      this.minBeginDate = value.beginDate;
      this.minEndDate = value.beginDate;
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.settingService.change(this.settingsForm.value)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
