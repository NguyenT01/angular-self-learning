import { Directive, HostBinding, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[nsAddClassIfRequired]',
  standalone: true,
  host: {
    '[class.is-required]': 'isRequired',
  },
})
export class AddClassIfRequiredDirective {
  private readonly control = inject(NgControl, { optional: true });

  get isRequired(): boolean {
    if (this.control?.dirty) {
      return this.control.hasError('required') ?? false;
    }
    return false;
  }

  @HostBinding('class.is-pristige')
  get isPristige(): boolean {
    return this.control?.pristine ?? false;
  }
}
