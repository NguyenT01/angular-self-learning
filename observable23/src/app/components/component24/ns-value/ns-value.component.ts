import { Component, input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-ns-value',
  imports: [],
  templateUrl: './ns-value.component.html',
  styleUrl: './ns-value.component.scss',
})
export class NsValueComponent {
  readonly value = input(0, {
    transform: (value: unknown) => numberAttribute(value, 42),
  });
}
