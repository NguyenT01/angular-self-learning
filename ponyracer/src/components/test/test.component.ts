import { Component } from '@angular/core';
import { DoNothingDirective } from '../../directives/do-nothing.directive';
import { SimpleTextWithSetterDirective } from '../../directives/loggable.directive';
import { Loggable2Directive } from '../../directives/loggable2.directive';

@Component({
  selector: 'ns-test',
  imports: [
    DoNothingDirective,
    SimpleTextWithSetterDirective,
    Loggable2Directive
  ],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  simpleText: string = 'We are logging'
  simpleText2: string = 'We are logging 2'
}
