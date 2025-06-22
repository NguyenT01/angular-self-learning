import { Routes } from '@angular/router';
import { Race } from './components/race/race';
import { Pony2 } from './components/pony2/pony2';
import { ChartComponent } from './components/chart/chart';

export const routes: Routes = [
  {
    path: 'races',
    component: Race,
  },
  {
    path: 'pony2',
    component: Pony2,
  },
  {
    path: 'chart',
    component: ChartComponent,
  },
];
