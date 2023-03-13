import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckavailabilityComponent } from './checkavailability.component';

describe('CheckavailabilityComponent', () => {
  let component: CheckavailabilityComponent;
  let fixture: ComponentFixture<CheckavailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckavailabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
