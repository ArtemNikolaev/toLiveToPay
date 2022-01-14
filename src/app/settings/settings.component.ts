import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';
import * as dayjs from 'dayjs';
import {BudgetType, Settings} from '../models/settings.model';
import {update} from '../state/settings/settings.actions';
import {first} from "rxjs";
import {selectSettings} from "../state/selectors/settings.selector";
import {AppConfig} from "../app-config/app-config.interface";
import {APP_CONFIG} from "../app-config/app-config.constants";

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
    budgetType: new FormControl(BudgetType.Static),
  });
  minBeginDate = dayjs().format('YYYY-MM-DD');
  minEndDate = dayjs().add(1, 'day').format('YYYY-MM-DD');
  budgetTypes: BudgetType[];

  constructor(
    private store: Store,
    @Inject( APP_CONFIG ) private config: AppConfig
  ) {
    this.budgetTypes = Object.values(BudgetType);
    this.settings$.pipe(first()).subscribe((value: Settings) => {
      const result = Object.assign({}, value);
      if (!result.budgetType) {
        result.budgetType = BudgetType.Static;
        this.store.dispatch(update({payload: value}));
      }

      this.settingsForm.setValue(result);
    })
  }

  onSubmit() {
    this.store.dispatch(update({payload: this.settingsForm.value}))
  }
}
