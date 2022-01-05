import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";
import {APP_CONFIG} from "../app-config/app=config.constants";
import {AppConfig} from "../app-config/app-config.interface";
import * as dayjs from "dayjs";

@Component({
  selector: 'withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {
  addSpendForm: FormGroup;

  constructor(
    private spendsService: SpendsStorageService,
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
    const value = new Spend(this.addSpendForm.value);
    value.sum = -value.sum;

    this.spendsService.add(value);
  }
}
