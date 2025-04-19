import { Component, inject, signal, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent {
  readonly route = inject(ActivatedRoute);
  readonly raceId: Signal<number | undefined>;

  // Get Data Resolver through Snapshot
  readonly race = signal(inject(ActivatedRoute).snapshot.data['race'])
  
  // Get Data Resolver through Route
  readonly raceResolverDynamic = toSignal(
    this.route.data.pipe(
      map(data => data['race'])
    )
  )

  constructor(){
    this.raceId = toSignal(this.route.paramMap.pipe(
      map((params) => params.get('id') as unknown as number)
    ))
  }
}
