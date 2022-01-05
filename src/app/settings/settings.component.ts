import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Store } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { Settings } from '../models/settings.model';
import { update } from '../state/settings/settings.actions';
import { selectSettings } from '../state/selectors';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings$ = this.store.select(selectSettings);
  settingsForm = new FormGroup({
    amount : new FormControl('0'),
    beginDate : new FormControl(''),
    endDate : new FormControl(''),
  });
  minBeginDate = dayjs().format('YYYY-MM-DD');
  minEndDate = dayjs().add(1, 'day').format('YYYY-MM-DD');

  constructor(
    private store: Store,
    private settingsService: SettingsService
  ) {
    this.settings$.subscribe((value: Settings) => {
      this.settingsForm.setValue(value);
    })
  }

  ngOnInit(): void {
    this.settingsService.get().subscribe(
      (settings: Settings | null) => {
        if (!settings) return;

        this.store.dispatch(update({payload: settings}))
      }
    );
  }

  onSubmit() {
    this.store.dispatch(update(this.settingsForm.value))
  }
}
