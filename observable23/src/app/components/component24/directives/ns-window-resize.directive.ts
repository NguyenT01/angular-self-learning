import { Directive } from '@angular/core';

@Directive({
  selector: '[nsWindowResize]',
  standalone: true,
  host: {
    '(window:resize)': 'resize($event)',
  },
})
export class WindowResizeDirective {
  resize(event: Event): void {
    const innerWidth = (event.target as Window).innerWidth;
    console.log('The screen is being resized to ', innerWidth);
  }
}
