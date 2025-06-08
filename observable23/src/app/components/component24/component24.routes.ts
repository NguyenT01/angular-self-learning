import { Route } from '@angular/router';
import { NsGeneralComponent } from './ns-general/ns-general.component';
import { LoginComponent } from './login/login.component';
import { RaceComponent } from './race/race.component';
import { CardParentComponent } from './card-parent/card-parent.component';
import { TabsComponentComponent } from './tabs-component/tabs-component.component';
import { ProgressParentComponent } from './progress-parent/progress-parent.component';
import { HostListenerComponent } from './host-listener/host-listener.component';
import { NewPonyComponent } from './new-pony/new-pony.component';

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
  {
    path: 'tabs',
    component: TabsComponentComponent,
  },
  {
    path: 'progress',
    component: ProgressParentComponent,
  },
  {
    path: 'host-listener',
    component: HostListenerComponent,
  },
  {
    path: 'new-pony',
    component: NewPonyComponent,
  },
];
