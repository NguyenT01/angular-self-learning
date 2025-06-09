import { Routes } from '@angular/router';
import { LiveRaceComponentComponent } from './components/live-race-component/live-race-component.component';
import { NsTypeaheadComponent } from './components/ns-typeahead/ns-typeahead.component';
import { component24Routes } from './components/component24/component24.routes';

export const routes: Routes = [
  { path: '', component: LiveRaceComponentComponent },
  { path: 'typeahead', component: NsTypeaheadComponent },
  {
    path: 'comp24',
    children: component24Routes,
  },
];
