import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[nsClearTraditional]',
  standalone: true,
})
export class ClearTraditionalDirective {
  private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);

  @HostListener('click')
  clearContent(): void {
    this.element.nativeElement.value = '';
  }
}
