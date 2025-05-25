import { Routes } from '@angular/router';
import { LiveRaceComponentComponent } from './components/live-race-component/live-race-component.component';
import { NsTypeaheadComponent } from './components/ns-typeahead/ns-typeahead.component';

export const routes: Routes = [
  { path: '', component: LiveRaceComponentComponent },
  { path: 'typeahead', component: NsTypeaheadComponent },
];
