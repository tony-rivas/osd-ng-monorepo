import { Route } from '@angular/router';
import { AdminHomeComponent } from './admin-home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: AdminHomeComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];
