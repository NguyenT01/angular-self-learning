import { Component, Inject, inject } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { TestComponent } from '../components/test/test.component';
import { RaceService } from './services/race-service';
import RaceModel from '../models/race-model';
import { LoggingService } from './services/logging-service';
import { LOCALE_IDX } from './app.config';
import { Title } from '@angular/platform-browser';
import { filter, from, map, Observable, range, tap } from 'rxjs';

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

    this.rxJsCallingDemo();
  }

  rxJsCallingDemo(){
    // Just an array, not RxJS
    [1,2,3,4,5]
      .map(x => x * 2)
      .filter(x => x > 5)
      .forEach(x => console.log(x));

    // RxJS - from Array
    from([1,2,3,4,5])
      .pipe(
        map(x => x * 2),
        filter(x => x > 5),
        tap(x => console.log('log ', x))
      )
      .subscribe(x => console.log(x));

    // RxJS - Observable from many sources
    const observable = new Observable(subscriber => subscriber.next('hello from Observable'));

    observable.subscribe(x => console.log(x));

    // Error handling
    range(1,5)
      .pipe(
        map(x => {
          if(x % 2 === 1){
            throw new Error('I don\'t like odd numbers');
          }
          return x;
        }),
        filter(x => x > 5)
      )
      .subscribe({
        next: x => console.log(x),
        error: err => console.error(err),
      });

    // Complete handling
    range(1, 5)
      .pipe(
        map(x => x * 3),
        filter(x => x > 10)
      )
      .subscribe({
        next: x => console.log(x),
        complete: () => console.log('All done!')
      })

  }

  onNewRace(raceName: string): void{
    this.newRaceString = raceName;
  }


}
