import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import * as dayjs from "dayjs";
import {BehaviorSubject} from "rxjs";
import {CategoriesStorageService} from "../services/categories-storage/categories-storage.service";
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";

@Component({
  selector: 'add-spend',
  templateUrl: './add-spend.component.html',
  styleUrls: ['./add-spend.component.css']
})
export class AddSpendComponent implements OnInit {
  $categories: BehaviorSubject<string[]>;
  addSpendForm = new FormGroup({
    sum : new FormControl('0'),
    date : new FormControl(dayjs().format('YYYY-MM-DD')),
    time: new FormControl(dayjs().unix() - dayjs().startOf('day').unix()),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private categoriesService: CategoriesStorageService,
    private spendsService: SpendsStorageService,
  ) {
    this.$categories = categoriesService.$categories;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.spendsService.add(new Spend(this.addSpendForm.value));
  }
}
