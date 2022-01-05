import { Injectable } from '@angular/core';
import { Settings } from './models/settings.model';
import { AbstractStorage } from './storage/storage.service';
import {selectSettings} from "./state/selectors";

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends AbstractStorage<Settings>{
  storageName = 'settings';

  override run() {
    this.store
      .select(selectSettings)
      .subscribe((data: Settings) => {
        this.set(data);
      });
  }
}
