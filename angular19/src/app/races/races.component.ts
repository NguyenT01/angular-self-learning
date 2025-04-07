import { Component, signal } from '@angular/core';
import RaceModel from '../../models/race-model';

@Component({
  selector: 'app-races',
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.scss'
})
export class RacesComponent {
  readonly races = signal<RaceModel[]>([])

  refreshRace(){
    this.races.set([
      { id: 1, name: 'Ponyville' },
      { id: 2, name: 'Canterlot' },
      { id: 3, name: 'Manehattan' }
    ])
  }

}
