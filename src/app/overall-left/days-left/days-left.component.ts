import { Component, OnInit } from '@angular/core';
import {combineLatest, Observable} from "rxjs";
import {SettingsService} from "../../services/settings-service/settings.service";

interface DaysLeftInterface {
  total: number,
  left: number,
}

@Component({
  selector: 'days-left',
  templateUrl: './days-left.component.html',
  styleUrls: ['../left.css']
})
export class DaysLeftComponent implements OnInit {
  $subject: Observable<DaysLeftInterface>;

  constructor(private settingsService: SettingsService  ) {
    this.$subject = combineLatest({
      total: settingsService.$daysOverall,
      left: settingsService.$daysLeft
    })
  }

  ngOnInit(): void {
  }

}
