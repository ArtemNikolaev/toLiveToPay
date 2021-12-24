import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as dayjs from "dayjs";
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";
import {APP_CONFIG} from "../app-config/app=config.constants";
import {AppConfig} from "../app-config/app-config.interface";

@Component({
  selector: 'save-money',
  templateUrl: './save-money.component.html',
  styleUrls: ['./save-money.component.css']
})
export class SaveMoneyComponent implements OnInit {
  addSpendForm: FormGroup;

  constructor(
    private spendsService: SpendsStorageService,
    @Inject( APP_CONFIG ) private config: AppConfig
  ) {
    this.addSpendForm = new FormGroup({
      sum : new FormControl('0'),
      date : new FormControl(dayjs().format('YYYY-MM-DD')),
      category: new FormControl(config.categories.deposit),
      description: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.spendsService.add(new Spend(this.addSpendForm.value));
  }
}
