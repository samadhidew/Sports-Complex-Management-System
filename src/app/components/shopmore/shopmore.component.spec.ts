import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopmoreComponent } from './shopmore.component';

describe('ShopmoreComponent', () => {
  let component: ShopmoreComponent;
  let fixture: ComponentFixture<ShopmoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopmoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
