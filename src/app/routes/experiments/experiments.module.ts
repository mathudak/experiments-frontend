import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsPreparationComponent } from './experiments-preparation/experiments-preparation.component';
import { ExperimentsOverviewComponent } from './experiments-overview/experiments-overview.component';
import { RouterModule } from '@angular/router';
import { experimentsRoutes } from './routes';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ExperimentsListComponent } from './components/experiments-list/experiments-list.component';

@NgModule({
  declarations: [ExperimentsPreparationComponent, ExperimentsOverviewComponent, ExperimentsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(experimentsRoutes),
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class ExperimentsModule {}
