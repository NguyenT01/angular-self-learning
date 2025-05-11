import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { RegisterReactiveComponent } from './components/register-reactive/register-reactive.component';
import { EditBlogPostComponent } from './components/edit-blog-post/edit-blog-post.component';
import { EditPackingListComponent } from './components/edit-packing-list/edit-packing-list.component';
import { RegisterNullabilityComponent } from './components/register-nullability/register-nullability.component';

export const routes: Routes = [
  { path: 'register-template', component: RegisterComponent },
  { path: 'register', component: RegisterReactiveComponent },
  { path: 'register-null', component: RegisterNullabilityComponent },
  { path: 'edit-blog', component: EditBlogPostComponent },
  { path: 'edit-packing', component: EditPackingListComponent },
  {
    path: '',
    component: AppComponent,
  },
];
