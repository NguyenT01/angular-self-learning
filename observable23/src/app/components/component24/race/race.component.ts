import { Component, effect, signal, viewChildren } from '@angular/core';
import { NsValueComponent } from '../ns-value/ns-value.component';

export interface RaceModel {
  key: number;
  value: number;
}

@Component({
  selector: 'app-race',
  imports: [NsValueComponent],
  templateUrl: './race.component.html',
  styleUrl: './race.component.scss',
})
export class RaceComponent {
  readonly raceModel = signal<RaceModel[]>([]);
  readonly ponies = viewChildren(NsValueComponent);

  constructor() {
    this.raceModel().push({ key: 1, value: 16 });
    this.raceModel().push({ key: 2, value: 20 });
    this.raceModel().push({ key: 3, value: 18 });
    this.raceModel().push({ key: 4, value: 22 });

    effect(() => {
      console.log('Number of ponies: ', this.ponies().length);
    });
  }
}
