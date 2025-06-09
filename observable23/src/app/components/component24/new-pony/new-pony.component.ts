import {
  afterNextRender,
  afterRender,
  Component,
  ElementRef,
  inject,
  Injector,
  signal,
  viewChild,
} from '@angular/core';

@Component({
  selector: 'app-new-pony',
  imports: [],
  templateUrl: './new-pony.component.html',
  styleUrl: './new-pony.component.scss',
})
export class NewPonyComponent {
  readonly ponyFormDisplayed = signal(false);
  readonly ponyName = viewChild<ElementRef<HTMLInputElement>>('ponyName');
  private readonly injector = inject(Injector);

  private readonly container = viewChild<ElementRef<HTMLElement>>('container');

  constructor() {
    afterRender(
      () => {
        console.log(
          'Container height: ',
          this.container()?.nativeElement.offsetHeight
        );
      },
      { injector: this.injector }
    );
  }

  showPonyForm(): void {
    this.ponyFormDisplayed.set(true);

    afterNextRender(
      () => {
        this.ponyName()?.nativeElement.focus();
        console.log('afterviewr render');
      },
      { injector: this.injector }
    );
  }
}
