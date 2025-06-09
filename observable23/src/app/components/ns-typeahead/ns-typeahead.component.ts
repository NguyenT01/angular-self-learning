import { Component, inject, Signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import PonyModel from '../../models/pony-models';
import PonyService from '../../services/pony-service';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  of,
  startWith,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';
import StateService from '../../services/state-service';

@Component({
  selector: 'app-ns-typeahead',
  imports: [ReactiveFormsModule],
  templateUrl: './ns-typeahead.component.html',
  styleUrl: './ns-typeahead.component.scss',
})
export class NsTypeaheadComponent {
  readonly input = inject(NonNullableFormBuilder).control('');
  readonly ponies: Signal<Array<PonyModel>>;

  // TRIGGER SUBJECT
  readonly refreshTrigger = new Subject<void>();
  readonly races: Signal<PonyModel[] | undefined>;

  // INTERVAL
  readonly interval: Signal<string | undefined>;
  readonly router = inject(Router);

  // STATE
  private readonly state = inject(StateService);
  readonly counterState: Signal<number>;

  constructor() {
    const ponyService = inject(PonyService);
    const ponies$ = this.input.valueChanges.pipe(
      filter((query) => query.length >= 3),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((value) =>
        ponyService.search(value).pipe(catchError(() => of([])))
      )
    );

    this.ponies = toSignal(ponies$, { initialValue: [] });

    const races$ = this.refreshTrigger.pipe(
      startWith(undefined),
      switchMap(() => ponyService.getList().pipe(catchError(() => of([]))))
    );
    this.races = toSignal(races$);

    this.interval = toSignal(
      ponyService.getInterval().pipe(tap((value) => console.log(value)))
    );

    this.counterState = this.state.getCounter;
  }

  refreshList() {
    this.refreshTrigger.next();
  }

  counterUp() {
    this.state.counterUp();
  }

  switchToHome() {
    this.router.navigate(['/']);
  }
}
