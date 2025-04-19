import { Routes } from '@angular/router';
import { UserComponent } from './user.component';

const userRoutes: Routes = [{ path: '', component: UserComponent }];

export default userRoutes;
// WHEN USING THE DEFAULT EXPORT WE DON'T USE THEN IN ROUTE LAZY LOADING
