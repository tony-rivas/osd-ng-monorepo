import { Route } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'admin',
  },
  {
    path: 'admin',
    component: AdminHomeComponent,
    pathMatch: 'full',
  },
];
