import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class RaceService {
  live(): Observable<string> {
    return of('Pony1');
  }
}
