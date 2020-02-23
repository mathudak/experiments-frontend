import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsDetailComponent } from './results-detail/results-detail.component';
import { RouterModule } from '@angular/router';
import { overviewRoutes } from './routes';

@NgModule({
  declarations: [DashboardComponent, ResultsDetailComponent],
  imports: [CommonModule, RouterModule.forChild(overviewRoutes)],
})
export class OverviewModule {}
