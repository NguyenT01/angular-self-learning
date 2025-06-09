import { Component } from '@angular/core';
import { TabsComponent } from '../tabs/tabs.component';
import { TabsDirective } from '../directives/tabs.directive';

@Component({
  selector: 'app-tabs-component',
  imports: [TabsComponent, TabsDirective],
  templateUrl: './tabs-component.component.html',
  styleUrl: './tabs-component.component.scss',
})
export class TabsComponentComponent {}
