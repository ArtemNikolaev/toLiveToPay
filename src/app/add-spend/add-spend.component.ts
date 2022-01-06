import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import * as dayjs from "dayjs";
import { Store } from '@ngrx/store';
import { add } from '../state/spends/spends.actions';
import { Spend } from '../models/spends.model';
import { selectCategories } from '../state/selectors/main';

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
  ) { }

  onSubmit() {
    this.store.dispatch(add({payload: new Spend(this.addSpendForm.value)}));
  }
}
