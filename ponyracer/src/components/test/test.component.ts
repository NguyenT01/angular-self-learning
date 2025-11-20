import { Component, signal, WritableSignal } from '@angular/core';
import { DoNothingDirective } from '../../directives/do-nothing.directive';
import { SimpleTextWithSetterDirective } from '../../directives/loggable.directive';
import { Loggable2Directive } from '../../directives/loggable2.directive';
import { LifeCycle21Directive } from '../../directives/life-cycle21.directive';
import { PonyColorComponentComponent } from '../pony-color-component/pony-color-component.component';

@Component({
  selector: 'ns-test',
  imports: [
    DoNothingDirective,
    SimpleTextWithSetterDirective,
    Loggable2Directive,
    LifeCycle21Directive,
    PonyColorComponentComponent,
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent {
  simpleText: string = 'We are logging';
  simpleText2: string = 'We are logging 2';

  readonly color: WritableSignal<string> = signal('');

  colors: string[] = ['red', 'blue', 'green', 'yellow', 'pink', 'orange'];

  constructor() {
    this.color.set(this.colors[0]);
  }

  changeColor() {
    this.color.set(this.colors[Math.floor(Math.random() * this.colors.length)]);
  }
}
