import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[nsClear]',
  standalone: true,
  host: {
    '(dblclick)': 'clearContent()',
  },
})
export class ClearDirective implements AfterViewInit {
  readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);

  clearContent(): void {
    this.element.nativeElement.value = '';
  }

  ngAfterViewInit(): void {
    console.log('inited ');
    this.element.nativeElement.focus();
  }
}
