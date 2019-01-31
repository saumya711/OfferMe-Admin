import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinChartComponent } from './min-chart.component';

describe('MinChartComponent', () => {
  let component: MinChartComponent;
  let fixture: ComponentFixture<MinChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
