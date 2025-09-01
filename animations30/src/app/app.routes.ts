import { Routes } from '@angular/router';
import { FormComponent } from '../components/form.component/form.component';
import { ContentComponent } from '../components/content.component/content.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
];
