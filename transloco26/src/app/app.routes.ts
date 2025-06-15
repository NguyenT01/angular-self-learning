import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { translateResolver2 } from './resolvers/translate.resolver';
import { Form1 } from './components/form1/form1';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    resolve: {
      translateResolve: translateResolver2,
    },
  },
  {
    path: 'form1',
    component: Form1,
    resolve: {
      translateResolve: translateResolver2,
    },
  },
];
