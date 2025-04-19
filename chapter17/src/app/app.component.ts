import { Component, inject, Signal, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import RaceModel from '../models/race-model';
import PonyModel from '../models/pony-model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly router = inject(Router);

  title = 'chapter17';

  raceModel: Signal<RaceModel | undefined> = signal({
    id: 10,
    name: 'Cairo Map'
  } as RaceModel);

  ponyModel: Signal<PonyModel | undefined> = signal({
    id: 999,
    name: 'Blue Pony'
  } as PonyModel);

  saveAndMoveBackToHome(){
    this.router.navigate(['']);
  }

  backToPony(){
    this.router.navigate(['/races',this.raceModel()?.id, 'ponies', this.ponyModel()?.id]);
  }

  backToPony2(){
    this.router.navigate(['/races',22, 'ponies', 333]);
  }

  backToRace(){
    this.router.navigate(['/races',44]);
  }

  backToNewRace(){
    this.router.navigate(['/races/new'])
  }

  backToPony3(){
    this.router.navigate(['/ponies', 333]);
  }
}
