import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperimentsPreparationComponent } from './experiments-preparation.component';

describe('ExperimentsPreparationComponent', () => {
  let component: ExperimentsPreparationComponent;
  let fixture: ComponentFixture<ExperimentsPreparationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperimentsPreparationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperimentsPreparationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
