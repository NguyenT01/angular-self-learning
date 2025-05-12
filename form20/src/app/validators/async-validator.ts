import { inject, Injectable } from '@angular/core';
import { UserService } from '../services/user-service';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidators {
  readonly userService = inject(UserService);

  isUsernameAvailable(
    control: AbstractControl<string | null>
  ): Observable<ValidationErrors | null> {
    if (!control.value) {
      return new Observable<ValidationErrors | null>((observer) => {
        observer.next(null);
        observer.complete();
      });
    }
    const username = control.value;
    return this.userService
      .isUsernameAvailable(username)
      .pipe(map((available) => (available ? null : { alreadyUsed: true })));
  }
}
