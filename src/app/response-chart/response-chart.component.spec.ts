import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseChartComponent } from './response-chart.component';

describe('ResponseChartComponent', () => {
  let component: ResponseChartComponent;
  let fixture: ComponentFixture<ResponseChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
