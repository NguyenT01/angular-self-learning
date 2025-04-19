import { Component, computed, effect, input, output } from '@angular/core';
import { PonyModel } from '../../models/pony-model';

@Component({
  selector: 'app-pony',
  imports: [],
  templateUrl: './pony.component.html',
  styleUrl: './pony.component.scss'
})
export class PonyComponent {
  readonly ponyModel = input.required<PonyModel>();

  readonly ponySelected = output<PonyModel>();

  readonly ponyIdentity = computed(() => `${this.ponyModel().name.toUpperCase()} (${this.ponyModel().color})`);

  selectMe(){
    this.ponySelected.emit(this.ponyModel());
  }

  constructor(){
    effect(() => {
      console.log('[EFF] PonyComponent: ponyModel', this.ponyModel());
      console.log('[EFF] PonyComponent: ponyIdentity', this.ponyIdentity());
    })
  }


  //----------INPUT SIGNALS-------------------
  // 1 - input() is optional.
  // If no parent assigns a value, the default value is undefined.
  // InputSignal<string | undefined>
  readonly name = input<string>();

  // 2 - input() has default value
  // If no parent assigns a value, the default value is 'blue'.
  // InputSignal<string>
  readonly color = input<string>('blue');
  
  // 3 - input() is required.
  // If no parent assigns a value, an error is thrown.
  // InputSignal<number>
  readonly tailLength = input.required<number>();

  // 4 - input() is required with alias
  readonly tailMaterial = input.required<string>({alias: 'material'})
}
