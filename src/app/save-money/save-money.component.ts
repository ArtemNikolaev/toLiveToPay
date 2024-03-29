import {Component, Inject } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as dayjs from "dayjs";
import {APP_CONFIG} from "../app-config/app-config.constants";
import {AppConfig} from "../app-config/app-config.interface";
import { Store } from '@ngrx/store';
import { add } from '../state/spends/spends.actions';
import { Spend } from '../models/spends.model';
import {PredefinedCategories} from "../models/categories.model";

@Component({
  selector: 'save-money',
  templateUrl: './save-money.component.html',
  styleUrls: ['./save-money.component.css']
})
export class SaveMoneyComponent {
  addSpendForm: FormGroup;

  constructor(
    private store: Store,
    @Inject( APP_CONFIG ) private config: AppConfig
  ) {
    this.addSpendForm = new FormGroup({
      sum : new FormControl('0'),
      date : new FormControl(dayjs().format('YYYY-MM-DD')),
      category: new FormControl(PredefinedCategories.Deposit),
      description: new FormControl(''),
    })
  }

  onSubmit() {
    this.store.dispatch(add({ payload: new Spend(this.addSpendForm.value) }));
  }
}
