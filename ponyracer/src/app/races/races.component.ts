import { Component, EventEmitter, Input, Output } from '@angular/core';
import RaceModel from '../../models/race-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ns-races',
  imports: [
    CommonModule
  ],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css',
  standalone: true
})
export class RacesComponent {
  @Input() counter2: number = 0;
  @Output() newRaceAvailable: EventEmitter<string> = new EventEmitter<string>();

  races: Array<RaceModel> = []

  fontWeight: string = 'bold';
  color: string = 'black';
  isAwsome: boolean = true;

  refreshRaces(): void{
    this.races = [{id: 1, name: 'London'}, {id: 2, name: 'Paris'}];
  }

  addNewRace(){
    this.newRaceAvailable.emit('New race Added');
    console.log('OK')
  }

  playing(){
    console.log('Playing...')
  }

  toggleStyles(){
    this.fontWeight = this.fontWeight === 'normal' ? 'bold' : 'normal';
    this.color = this.color === 'black' ? 'blue' :' black';
    this.isAwsome = !this.isAwsome;
  }
}
