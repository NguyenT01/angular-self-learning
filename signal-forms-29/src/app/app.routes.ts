import { Routes } from '@angular/router';
import { LoginComponent } from './components/login-component/login-component';
import { RegisterComponent } from './components/register-component/register-component';
import { RegisterZodComponent } from './components/register-zod-component/register-zod-component';
import { EventComponent } from './components/event-component/event-component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'register-zod',
    component: RegisterZodComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  }
];
