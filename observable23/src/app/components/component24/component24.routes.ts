import { Route } from '@angular/router';
import { NsGeneralComponent } from './ns-general/ns-general.component';
import { LoginComponent } from './login/login.component';
import { RaceComponent } from './race/race.component';
import { CardParentComponent } from './card-parent/card-parent.component';

export const component24Routes: Route[] = [
  {
    path: 'general',
    component: NsGeneralComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'race',
    component: RaceComponent,
  },
  {
    path: 'card',
    component: CardParentComponent,
  },
];
