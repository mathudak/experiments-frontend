import { Component, OnInit } from '@angular/core';
import { Experiments } from 'app/core/interfaces';

@Component({
  selector: 'app-experiments-list',
  templateUrl: './experiments-list.component.html',
  styleUrls: ['./experiments-list.component.scss'],
})
export class ExperimentsListComponent implements OnInit {
  experiments: Array<Experiments>;

  constructor() {}

  ngOnInit(): void {
    console.log('Experiments list init');
  }
}
