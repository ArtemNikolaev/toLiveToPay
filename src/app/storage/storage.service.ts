import { Observable, of } from 'rxjs';
import { LocalStorageConnector } from './localStorage/localStorage.connector';
import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export abstract class AbstractStorage<Type> {
  abstract storageName: string;
  constructor(
    private storage: LocalStorageConnector<Type>,
    protected store: Store,
  ) {
    this.run();
  }

  get() : Observable<Type | null> {
    return of(this.storage.get(this.storageName))
  }

  set(value: Type): Observable<boolean> {
    return of(this.storage.set(this.storageName, value));
  }

  run() {
    console.error('run function should be overrided');
  }
}
