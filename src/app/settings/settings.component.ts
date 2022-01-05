import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { SettingsService } from '../settings.service';
import { Store } from '@ngrx/store';
import * as dayjs from 'dayjs';
import { Settings } from '../models/settings.model';
import { updateAll } from '../state/settings.actions';
import { selectSettings } from '../state/settings.selector';

@Component({
  selector: 'settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  settings$ : Observable<Settings> = this.store.select(selectSettings);
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

        this.store.dispatch(updateAll(settings))
      }
    );
  }

  onSubmit() {
    this.store.dispatch(updateAll(this.settingsForm.value))
  }
}
