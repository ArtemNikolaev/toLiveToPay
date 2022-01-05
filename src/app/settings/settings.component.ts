import {Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '../settings.service';
import { Store } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { Settings } from '../models/settings.model';
import { update } from '../state/settings/settings.actions';
import { selectSettings } from '../state/selectors';
import {first} from "rxjs";

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
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
    this.settings$.pipe(first()).subscribe((value: Settings) => {
      this.settingsForm.setValue(value);
    })
  }

  onSubmit() {
    console.log(this.settingsForm.value);
    this.store.dispatch(update({payload: this.settingsForm.value}))
  }
}
