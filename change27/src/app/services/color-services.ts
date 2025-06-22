import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class ColorServices {
  private readonly colors: Array<string> = ['green', 'orange', 'blue'];

  get(): Observable<string> {
    // every 2 seconds
    return new Observable<string>((sub) => {
      let index = 0;
      const interval = setInterval(() => {
        sub.next(this.colors[index]);
        index = (index + 1) % this.colors.length;
      }, 2000);

      // cleanup
      return () => clearInterval(interval);
    });
  }
}
