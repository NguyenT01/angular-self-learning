import { Component, input } from '@angular/core';

@Component({
  selector: 'ns-pony-color-component',
  imports: [],
  templateUrl: './pony-color-component.component.html',
  styleUrl: './pony-color-component.component.css',
})
export class PonyColorComponentComponent {
  readonly color = input.required<string>();
}
