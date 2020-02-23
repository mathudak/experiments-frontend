import { Routes } from '@angular/router';
import { ExperimentsOverviewComponent } from './experiments-overview/experiments-overview.component';
import { ExperimentsPreparationComponent } from './experiments-preparation/experiments-preparation.component';

export const experimentsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'overview',
    pathMatch: 'full',
  },
  {
    path: 'overview',
    component: ExperimentsOverviewComponent,
  },
  {
    path: 'preparation',
    component: ExperimentsPreparationComponent,
  },
];
