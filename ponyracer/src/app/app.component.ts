import { Component, Inject, inject } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { TestComponent } from '../components/test/test.component';
import { RaceService } from './services/race-service';
import RaceModel from '../models/race-model';
import { LoggingService } from './services/logging-service';
import { LOCALE_IDX } from './app.config';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'ns-root',
  imports:[
    RacesComponent,
    TestComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  user: {name: string} | undefined;
  counter: number = 0;
  newRaceString: string = '';

  isDisable: boolean = true;

  races: Array<RaceModel> = [];

  constructor(private readonly raceService: RaceService, 
    @Inject(LOCALE_IDX) public locale: string,
    title: Title
  ){
    this.races = this.raceService.list();

    this.callInjection();

    title.setTitle('Pony Racer - Bet on ponies');
  }

  callInjection(){
    const loggingService = inject(LoggingService);
    loggingService.log('Hello from AppComponent');
  }
  
  onClickButton(event: Event) : void{
    this.isDisable = !this.isDisable;
    this.counter++;
    console.log(event);
  }

  onNewRace(raceName: string): void{
    this.newRaceString = raceName;
  }


}
