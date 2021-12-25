import { Component, OnInit } from '@angular/core';
import {DaysLeft, DaysLeftService} from "./days-left.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['./days-left.component.css']
})
export class DaysLeftComponent implements OnInit {
  $subject: BehaviorSubject<DaysLeft>;

  constructor(private daysLeftService: DaysLeftService) {
    this.$subject = daysLeftService.$daysLeft;

    this.$subject.subscribe(console.log);
  }

  ngOnInit(): void {
  }

}
