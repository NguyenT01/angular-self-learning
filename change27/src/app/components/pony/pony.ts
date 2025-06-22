import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import PonyModel from '../../model/pony-model';
import { ImageComponent } from '../image/image';

@Component({
  selector: 'app-pony',
  imports: [ImageComponent],
  templateUrl: './pony.html',
  styleUrl: './pony.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Pony {
  readonly ponyModel = input.required<PonyModel>();
  protected readonly ponyImageUrl = computed(
    () => `/images/pony-${this.ponyModel().color}-running.png`
  );
  protected check(): void {
    console.log('pony component view checked');
  }
}
