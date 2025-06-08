import {
  AfterContentInit,
  Component,
  contentChildren,
  effect,
} from '@angular/core';
import { TabsDirective } from '../directives/tabs.directive';

@Component({
  selector: 'app-tabs',
  imports: [],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss',
})
export class TabsComponent implements AfterContentInit {
  readonly tabs = contentChildren(TabsDirective, { descendants: true });

  constructor() {
    effect(() => {
      console.log(`Tabs count: ${this.tabs().length}`);
    });
  }

  ngAfterContentInit(): void {
    console.log('Content initialized: ', this.tabs().length);
  }
}
