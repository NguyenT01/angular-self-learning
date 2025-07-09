import { Routes } from '@angular/router';
import { ValueEq } from './components/value-eq/value-eq';
import { Untracked } from './components/untracked/untracked';
import { TwoWay } from './components/two-way/two-way';
import { ItemListParent } from './components/item-list-parent/item-list-parent';

export const routes: Routes = [
  {
    path: 'value-eq',
    component: ValueEq,
  },
  {
    path: 'untracked',
    component: Untracked,
  },
  {
    path: 'two-way',
    component: TwoWay,
  },
  {
    path: 'item-list',
    component: ItemListParent,
  },
];
