import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyformListformComponent } from './happyform-listform.component';

describe('HappyformListformComponent', () => {
  let component: HappyformListformComponent;
  let fixture: ComponentFixture<HappyformListformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyformListformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyformListformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
