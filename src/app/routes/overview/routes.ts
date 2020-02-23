import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';

export const overviewRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'detail',
    component: ResultsDetailComponent,
  },
];
