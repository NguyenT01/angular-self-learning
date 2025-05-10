import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isUsernameAvailable(username: string): Observable<boolean | null> {
    return new Observable<boolean | null>((observer) => {
      setTimeout(() => {
        if (username === 'nguyen') {
          observer.next(false);
        } else {
          observer.next(true);
        }
        observer.complete();
      }, 2000);
    });
  }
}
