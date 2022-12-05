import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDeleteComponent } from './review-delete.component';

describe('ReviewDeleteComponent', () => {
  let component: ReviewDeleteComponent;
  let fixture: ComponentFixture<ReviewDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
