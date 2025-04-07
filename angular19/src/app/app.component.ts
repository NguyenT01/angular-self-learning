import { Component, signal, WritableSignal } from '@angular/core';
import { PonyModel } from '../models/pony-model';
import { JsonPipe } from '@angular/common';
import { RacesComponent } from './races/races.component';
import { PonyComponent } from './pony/pony.component';
import { ScoreComponent } from './score/score.component';

@Component({
  selector: 'app-root',
  imports: [
    JsonPipe,
    RacesComponent,
    PonyComponent,
    ScoreComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular19';

  readonly count = signal(40);

  readonly rainbowDash = signal<PonyModel>({
    name: 'Rainbow Dash',
    color: 'blue'
  })

  readonly pinkiePie: WritableSignal<PonyModel> = signal({
    name: 'Pinkie Pie',
    color: 'red'
  })

  readonly unknownPony = signal<PonyModel | undefined>(undefined);

  readonly ponyColor = signal<string>('red');
  readonly ponyTailLenghtInInch = signal<number>(20);
  readonly ponytailMaterial = signal<string>('silk');

  readonly ponyModelParent = signal<PonyModel>({
    name: 'Rainbow Dash 2',
    color: 'cyan'
  });

  readonly selectedPonyParent = signal<PonyModel | undefined>(undefined);

  setNewPonyParent(){
    this.ponyModelParent.set({
      name: 'Twilight Sparkle',
      color: 'purple'
    })
  }

  betOnPony(pony: PonyModel){
    console.log('Bet on pony:', pony);
    this.selectedPonyParent.set(pony);
  }


  //READ SIGNAL
  getSignal(){
    const value: PonyModel = this.rainbowDash();
    console.log(value);
  }
  
  // SET A NEW VALUE VALUE OF SIGNALS
 setNewValueInSignal(){
    this.rainbowDash.set({
      name: 'Rainbow Dash',
      color: 'yellow'
    })
  }

  // UPDATE A VALUE OF SIGNALS
  updateValueInSignal(){
    this.rainbowDash.update(pony => ({...pony, color: 'green'}));

    // 2nd way to update
    this.rainbowDash.set({...this.rainbowDash(), color: 'ocean blue'})

    // SIGNAL WITH ARRAY
    const num = signal<number[]>([1, 2, 3]);
    num.update((value) => [...value, 4])
    console.log(num());
  }
}
