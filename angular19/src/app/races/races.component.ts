import { Component, inject, signal } from '@angular/core';
import RaceModel from '../../models/race-model';
import { RaceService } from '../../services/race-service';
import { Observable, switchMap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent {
  readonly races = signal<RaceModel[]>([])

  private readonly raceService = inject(RaceService);
  readonly raceId = signal<number>(2);
  readonly race$ : Observable<RaceModel> = toObservable(this.raceId)
    .pipe(
      switchMap(id => this.raceService.get(id))
    );
  
  readonly race = toSignal(this.race$);

  refreshRace(){
    this.races.set([
      { id: 1, name: 'Ponyville' },
      { id: 2, name: 'Canterlot' },
      { id: 3, name: 'Manehattan' }
    ])
  }

}
