import {
  Directive,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[initDirective]',
  standalone: true,
})
export class OnInitDirective implements OnInit {
  @Input({ required: true }) pony!: string;
  ngOnInit() {
    console.log(`Inputs are ${this.pony}`);
  }
}

@Directive({
  selector: '[onChangesDirective]',
  standalone: true,
})
export class OnChangesDirective implements OnChanges {
  @Input({ required: true }) pony!: string;
  ngOnChanges(changes: SimpleChanges): void {
    const ponyValue = changes['pony'];
    console.log(
      `changes from ${ponyValue.previousValue} to ${ponyValue.currentValue}`
    );
  }
}

@Directive({
  selector: '[onDestroyDirective]',
  standalone: true,
})
export class OnDestroyDirective implements OnDestroy {
  sayHello: number;
  constructor() {
    this.sayHello = globalThis.setInterval(() => console.log('Hello'), 1000);
  }

  ngOnDestroy() {
    globalThis.clearInterval(this.sayHello);
  }
}
