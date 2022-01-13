import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {APP_CONFIG} from "../app-config/app-config.constants";
import {AppConfig} from "../app-config/app-config.interface";
import * as dayjs from "dayjs";
import { Store } from '@ngrx/store';
import { add } from '../state/spends/spends.actions';
import { Spend } from '../models/spends.model';

@Component({
  selector: 'withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  addSpendForm: FormGroup;


  constructor(
    private store: Store,
    @Inject( APP_CONFIG ) private config: AppConfig
  ) {
    this.addSpendForm = new FormGroup({
      sum : new FormControl('0'),
      date : new FormControl(dayjs().format('YYYY-MM-DD')),
      category: new FormControl(config.categories.withdraw),
      description: new FormControl(''),
    })
  }

  onSubmit() {
    const payload = new Spend(this.addSpendForm.value);
    payload.sum = -payload.sum;

    this.store.dispatch(add({payload}));
  }
}
