import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent {
  readonly score = signal(0);

  constructor(){
    effect(() =>{
      console.log(`The score is: ${this.score()}`);
    })
  }

  plusOne(){
    this.score.update(s => s+1);
  }

  plusTwo(){
    this.plusOne();
    this.plusOne();
  }

}
