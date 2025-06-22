import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [],
  templateUrl: './image.html',
  styleUrl: './image.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  readonly src = input.required<string>();
  protected check(): void {
    console.log('image component view checked');
  }
}
