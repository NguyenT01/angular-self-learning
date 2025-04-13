import { Component, inject, Signal } from '@angular/core';
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
  readonly raceId: Signal<number | undefined>;

  constructor(){
    const route = inject(ActivatedRoute);
    this.raceId = toSignal(route.paramMap.pipe(
      map((params) => params.get('id') as unknown as number)
    ))
  }
}
