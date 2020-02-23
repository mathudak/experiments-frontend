import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'experiments',
    pathMatch: 'full',
  },
  {
    path: 'experiments',
    loadChildren: () => import('./experiments/experiments.module').then(m => m.ExperimentsModule),
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule),
  },
];
