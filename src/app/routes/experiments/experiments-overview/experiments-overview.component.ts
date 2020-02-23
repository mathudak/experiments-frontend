import { Component, OnInit } from '@angular/core';
import { Experiments } from 'app/core/interfaces';

@Component({
  selector: 'app-experiments-overview',
  templateUrl: './experiments-overview.component.html',
  styleUrls: ['./experiments-overview.component.scss'],
})
export class ExperimentsOverviewComponent implements OnInit {
  experiments: Array<Experiments>;

  constructor() {}

  ngOnInit(): void {
    console.log('Test');
  }
}
