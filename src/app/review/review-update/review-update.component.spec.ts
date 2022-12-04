import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewUpdateComponent } from './review-update.component';

describe('ReviewUpdateComponent', () => {
  let component: ReviewUpdateComponent;
  let fixture: ComponentFixture<ReviewUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
