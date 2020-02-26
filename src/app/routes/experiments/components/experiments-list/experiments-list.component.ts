import { Component, OnInit } from '@angular/core';
import { Experiments } from 'app/core/interfaces';
import { ExperimentsService } from 'app/core/experiments/experiments.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-experiments-list',
  templateUrl: './experiments-list.component.html',
  styleUrls: ['./experiments-list.component.scss'],
})
export class ExperimentsListComponent implements OnInit {
  experiments: Array<Experiments> = [];

  constructor(private experimentsService: ExperimentsService) {}

  ngOnInit(): void {
    this.experimentsService
      .getExperiments()
      .pipe(tap(experiments => (this.experiments = experiments)))
      .subscribe();
  }
}
