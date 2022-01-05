import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageConnector<Type>{

  constructor() { }

  get(itemName: string): Type | null {
    const strValue = localStorage.getItem(itemName);
    if (strValue === null) return strValue;

    try {
      const result : Type = JSON.parse(strValue);

      return result;
    } catch (e) {
      return null;
    }
  }

  set(itemName: string, value: Type): true {
    localStorage.setItem(itemName, JSON.stringify(value));

    return true;
  }
}
