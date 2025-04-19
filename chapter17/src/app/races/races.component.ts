import { Component, inject, OnDestroy, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss',
})
export class RacesComponent implements OnDestroy {
  readonly router = inject(Router);
  readonly route = inject(ActivatedRoute);
  readonly raceId: Signal<number | undefined>;
  // Register Subscription
  readonly subscription: Subscription;

  // Get Data Resolver through Snapshot
  readonly race = signal(inject(ActivatedRoute).snapshot.data['race']);

  // Get Data Resolver through Route
  readonly raceResolverDynamic = toSignal(
    this.route.data.pipe(map((data) => data['race']))
  );

  constructor() {
    this.raceId = toSignal(
      this.route.paramMap.pipe(
        map((params) => params.get('id') as unknown as number)
      )
    );

    this.subscription = this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart || event instanceof NavigationEnd
        )
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log('Navigation started');
          console.log(event);
        } else if (event instanceof NavigationEnd) {
          console.log('Navigation ended');
          console.log(event);
        } else {
          console.log('Navigation cancelled or error');
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
