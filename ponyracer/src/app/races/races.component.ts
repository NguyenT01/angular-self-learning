import { Component, EventEmitter, Input, Output } from '@angular/core';
import RaceModel from '../../models/race-model';

@Component({
  selector: 'ns-races',
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css',
  standalone: true
})
export class RacesComponent {
  @Input() counter2: number = 0;
  @Output() newRaceAvailable: EventEmitter<string> = new EventEmitter<string>();

  races: Array<RaceModel> = []

  refreshRaces(): void{
    this.races = [{name: 'London'}, {name: 'Paris'}];
  }

  addNewRace(){
    this.newRaceAvailable.emit('New race Added');
    console.log('OK')
  }

  playing(){
    console.log('Playing...')
  }
}
