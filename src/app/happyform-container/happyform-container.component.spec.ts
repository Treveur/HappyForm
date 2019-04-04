import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyformContainerComponent } from './happyform-container.component';

describe('HappyformContainerComponent', () => {
  let component: HappyformContainerComponent;
  let fixture: ComponentFixture<HappyformContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyformContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyformContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
