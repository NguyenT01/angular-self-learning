import { Routes } from '@angular/router';
import { ValueEq } from './components/value-eq/value-eq';
import { Untracked } from './components/untracked/untracked';

export const routes: Routes = [
  {
    path: 'value-eq',
    component: ValueEq,
  },
  {
    path: 'untracked',
    component: Untracked,
  },
];
