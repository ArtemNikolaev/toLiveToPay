import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  async get<Result>(propName: string): Promise<Result> {
    try {
      const jsonValue : string | null = localStorage.getItem(propName);

      if (!jsonValue) {
        throw `No value in storage for ${propName}`;
      }

      const value : Result = JSON.parse(jsonValue);

      return Promise.resolve(value);
    } catch (e) {
      return Promise.reject(e);
    }
  }

  async set<Content>(propName: string, content: Content): Promise<void> {
    try {
      localStorage.setItem(propName, JSON.stringify(content));

      return Promise.resolve();
    } catch (e) {
      return Promise.reject(e);
    }
  }
}
