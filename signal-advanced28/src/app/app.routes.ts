import { Routes } from '@angular/router';
import { ValueEq } from './components/value-eq/value-eq';
import { Untracked } from './components/untracked/untracked';
import { TwoWay } from './components/two-way/two-way';
import { ItemListParent } from './components/item-list-parent/item-list-parent';
import { UserListComponent } from './components/user-list-component/user-list-component';
import { UserListRxjsComponent } from './components/user-list-rxjs-component/user-list-rxjs-component';
import { UserListHttp } from './components/user-list-http/user-list-http';

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
  {
    path: 'user-resource',
    component: UserListComponent,
  },
  {
    path: 'user-rxjs',
    component: UserListRxjsComponent,
  },
  {
    path: 'user-http',
    component: UserListHttp,
  },
];
