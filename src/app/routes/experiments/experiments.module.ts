import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsPreparationComponent } from './experiments-preparation/experiments-preparation.component';
import { ExperimentsOverviewComponent } from './experiments-overview/experiments-overview.component';
import { RouterModule } from '@angular/router';
import { experimentsRoutes } from './routes';

@NgModule({
  declarations: [ExperimentsPreparationComponent, ExperimentsOverviewComponent],
  imports: [CommonModule, RouterModule.forChild(experimentsRoutes)],
})
export class ExperimentsModule {}
