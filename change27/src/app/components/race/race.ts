import { Component, signal } from '@angular/core';
import { Pony } from '../pony/pony';
import PonyModel from '../../model/pony-model';

@Component({
  selector: 'app-race',
  imports: [Pony],
  templateUrl: './race.html',
  styleUrl: './race.scss',
})
export class Race {
  protected readonly ponies = signal<Array<PonyModel>>([
    { id: 1, color: 'green' },
    { id: 2, color: 'orange' },
  ]);
  protected readonly colors: Array<string> = ['green', 'orange', 'blue'];

  protected check(): void {
    console.log('race component view checked');
  }

  protected changeColor(): void {
    const ponies = this.ponies();
    const pony = ponies[0];
    ponies[0] = { ...pony, color: this.randomColor() };
    this.ponies.set([...ponies]);
  }

  protected randomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)];
  }
}
