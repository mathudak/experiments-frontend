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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ExperimentsListComponent } from './components/experiments-list/experiments-list.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ExperimentsPreparationComponent, ExperimentsOverviewComponent, ExperimentsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(experimentsRoutes),
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SharedModule,
  ],
})
export class ExperimentsModule {}
