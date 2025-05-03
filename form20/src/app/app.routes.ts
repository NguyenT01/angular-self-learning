import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterReactiveComponent } from './components/register-reactive/register-reactive.component';

export const routes: Routes = [
  { path: 'register-template', component: RegisterComponent },
  { path: 'register', component: RegisterReactiveComponent },
  {
    path: '',
    component: AppComponent,
  },
];
