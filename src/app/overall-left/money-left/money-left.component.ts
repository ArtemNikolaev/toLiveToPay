import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {MoneyLeftService} from "./money-left.service";

@Component({
  selector: 'money-left',
  templateUrl: './money-left.component.html',
  styleUrls: ['./../left.css']
})
export class MoneyLeftComponent implements OnInit {
  $subject: BehaviorSubject<any>;

  constructor(private service: MoneyLeftService) {
    this.$subject = service.$subject;
  }

  ngOnInit(): void {
  }

}
