import { Directive, input } from '@angular/core';

@Directive({
  selector: 'ns-tabs',
  standalone: true,
})
export class TabsDirective {
  readonly title = input('');
}
