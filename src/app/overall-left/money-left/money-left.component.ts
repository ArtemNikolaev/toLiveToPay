import { Component, OnInit } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {TotalLeft} from "../days-left/days-left.service";
import {MoneyLeftService} from "./money-left.service";

@Component({
  selector: 'money-left',
  templateUrl: './money-left.component.html',
  styleUrls: ['./../left.css']
})
export class MoneyLeftComponent implements OnInit {
  $subject: BehaviorSubject<TotalLeft>;

  constructor(private service: MoneyLeftService) {
    this.$subject = service.$subject;
  }

  ngOnInit(): void {
  }

}
