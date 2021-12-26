import { Component, OnInit } from '@angular/core';
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'today-spends',
  templateUrl: './today-spends.component.html',
  styleUrls: ['./today-spends.component.css']
})
export class TodaySpendsComponent implements OnInit {
  $spends: BehaviorSubject<Spend[]>;
  displayedColumns: string[] = ['time', 'sum', 'category', 'description'];

  constructor(private spendsService: SpendsStorageService) {
    this.$spends = spendsService.$subject;
  }

  ngOnInit(): void {
  }

}
