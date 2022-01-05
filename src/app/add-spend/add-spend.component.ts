import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as dayjs from "dayjs";
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";
import { Store } from '@ngrx/store';
import { selectCategories } from '../state/selectors';

@Component({
  selector: 'add-spend',
  templateUrl: './add-spend.component.html',
  styleUrls: ['./add-spend.component.css']
})
export class AddSpendComponent {
  categories$ = this.store.select(selectCategories);
  addSpendForm = new FormGroup({
    sum : new FormControl('0'),
    date : new FormControl(dayjs().format('YYYY-MM-DD')),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private store: Store,
    private spendsService: SpendsStorageService,
  ) {
  }

  onSubmit() {
    this.spendsService.add(new Spend(this.addSpendForm.value));
  }
}
