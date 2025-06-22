import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
} from '@angular/core';
import ColorServices from '../../services/color-services';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-pony2',
  imports: [],
  templateUrl: './pony2.html',
  styleUrl: './pony2.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pony2 {
  protected readonly color: Signal<string | undefined> = toSignal(
    inject(ColorServices).get()
  );
  constructor() {}
}
