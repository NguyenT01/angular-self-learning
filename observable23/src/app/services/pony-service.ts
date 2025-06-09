import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import PonyModel from '../models/pony-models';

@Injectable({
  providedIn: 'root',
})
export default class PonyService {
  // List of ponies
  // This is a mock service that simulates an API call
  ponies: PonyModel[] = [
    { id: 1, name: 'Twilight Sparkle' },
    { id: 2, name: 'Pinkie Pie' },
    { id: 3, name: 'Rainbow Dash' },
    { id: 4, name: 'Rarity' },
    { id: 5, name: 'Applejack' },
  ];
  search(searchKey: string): Observable<PonyModel[]> {
    return new Observable<PonyModel[]>((subscriber) => {
      // Simulate an API call with a delay
      setTimeout(() => {
        const filteredPonies = this.ponies.filter((pony) => {
          return pony.name.toLowerCase().includes(searchKey.toLowerCase());
        });
        subscriber.next(filteredPonies);
        subscriber.complete();
      }, 1000);
    });
  }

  getList(): Observable<PonyModel[]> {
    return of(this.ponies);
  }

  getInterval(): Observable<string> {
    return new Observable<string>((observer) => {
      const interval = setInterval(() => observer.next('hello'), 2000);
      return () => clearInterval(interval);
    });
  }
}
