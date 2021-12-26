import { Component, OnInit } from '@angular/core';
import {TotalLeft, DaysLeftService} from "./days-left.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent implements OnInit {
  $subject: BehaviorSubject<TotalLeft>;

  constructor(private daysLeftService: DaysLeftService) {
    this.$subject = daysLeftService.$subject;
  }

  ngOnInit(): void {
  }

}
