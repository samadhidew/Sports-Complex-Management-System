import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorenewsComponent } from './morenews.component';

describe('MorenewsComponent', () => {
  let component: MorenewsComponent;
  let fixture: ComponentFixture<MorenewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MorenewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorenewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
