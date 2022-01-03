import {Inject, Injectable} from '@angular/core';
import {Spend, SpendsStorageService} from "../services/spends-service/spends-storage.service";
import {BehaviorSubject, filter, map} from "rxjs";
import {APP_CONFIG} from "../app-config/app=config.constants";
import {AppConfig} from "../app-config/app-config.interface";

@Injectable({
  providedIn: 'root'
})
export class SavingsService {
  $subject;

  constructor(
    private spends: SpendsStorageService,
    @Inject( APP_CONFIG ) private config: AppConfig
  ) {
    this.$subject = spends.$subject.pipe(map((els:Spend[]) => {
      return els
        .filter(el =>
          el.category === config.categories.deposit ||
          el.category === config.categories.withdraw
        )
        .reduce((a, b) => {
          return a + b.sum;
        }, 0)
    }));
  }
}
