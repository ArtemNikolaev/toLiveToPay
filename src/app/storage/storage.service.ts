import { Observable, of } from 'rxjs';
import { LocalStorageConnector } from './localStorage/localStorage.connector';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractStorage<Type> {
  abstract storageName: string;
  constructor(private storage: LocalStorageConnector<Type>) { }

  get() : Observable<Type | null> {
    return of(this.storage.get(this.storageName))
  }

  set(value: Type): Observable<boolean> {
    return of(this.storage.set(this.storageName, value));
  }
}
