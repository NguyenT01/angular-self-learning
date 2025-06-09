import { booleanAttribute, Component, input } from '@angular/core';

@Component({
  selector: 'app-ns-button',
  imports: [],
  templateUrl: './ns-button.component.html',
  styleUrl: './ns-button.component.scss',
})
export class NsButtonComponent {
  readonly disabled = input(false, { transform: booleanAttribute });
}
