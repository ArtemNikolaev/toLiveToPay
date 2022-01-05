import { Injectable } from '@angular/core';
import { Settings } from './models/settings.model';
import { AbstractStorage } from './storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService extends AbstractStorage<Settings>{
  storageName = 'settings';
}
