import { Component } from '@angular/core';
import { RacesComponent } from './races/races.component';
import { TestComponent } from '../components/test/test.component';

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
  onClickButton(event: Event) : void{
    this.isDisable = !this.isDisable;
    this.counter++;
    console.log(event);
  }

  onNewRace(raceName: string): void{
    this.newRaceString = raceName;
  }


}
