import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestsDetailComponent } from './product-requests-detail.component';

describe('ProductRequestsDetailComponent', () => {
  let component: ProductRequestsDetailComponent;
  let fixture: ComponentFixture<ProductRequestsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequestsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRequestsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
