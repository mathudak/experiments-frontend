import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperimentsPreparationComponent } from './experiments-preparation/experiments-preparation.component';
import { ExperimentsOverviewComponent } from './experiments-overview/experiments-overview.component';



@NgModule({
  declarations: [ExperimentsPreparationComponent, ExperimentsOverviewComponent],
  imports: [
    CommonModule
  ]
})
export class ExperimentsModule { }
