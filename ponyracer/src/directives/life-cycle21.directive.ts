import { Directive, input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[onChangeDirective21]',
  standalone: true,
})
export class LifeCycle21Directive implements OnChanges {
  readonly color = input.required<string>();

  ngOnChanges(changes: SimpleChanges<LifeCycle21Directive>): void {
    const ponyChange = changes.color;

    if (ponyChange) {
      console.log(`Color changed from ${ponyChange.previousValue}`);
      console.log(`to ${ponyChange.currentValue}`);
      console.log(`Is it the first change? ${ponyChange.isFirstChange()}`);
    }

    console.log(`My new color is ${this.color()}`);
  }
}
