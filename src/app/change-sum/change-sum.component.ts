import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import { Store } from '@ngrx/store';
import { addToAmount } from '../state/settings/settings.actions';

@Component({
  selector: 'change-sum',
  templateUrl: './change-sum.component.html',
  styleUrls: ['./change-sum.component.css']
})
export class ChangeSumComponent {
  amount = new FormControl(0)

  constructor(private store: Store) { }

  onSave() {
    if (!this.amount.value) return;

    this.store.dispatch(addToAmount({payload: this.amount.value}));
  }
}
