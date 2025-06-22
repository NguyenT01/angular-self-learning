import { Routes } from '@angular/router';
import { NsLocale } from './components/ns-locale/ns-locale';
import { NsCurrency } from './components/ns-currency/ns-currency';
import { NsWelcome } from './components/ns-welcome/ns-welcome';
import { TranslocoComponent } from './components/transloco-component/transloco-component';

export const routes: Routes = [
  {
    path: 'locale',
    component: NsLocale,
  },
  {
    path: 'currency',
    component: NsCurrency,
  },
  {
    path: 'welcome',
    component: NsWelcome,
  },
  {
    path: 'transloco',
    component: TranslocoComponent,
  },
];
