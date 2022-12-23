import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestsDeleteComponent } from './product-requests-delete.component';

describe('ProductRequestsDeleteComponent', () => {
  let component: ProductRequestsDeleteComponent;
  let fixture: ComponentFixture<ProductRequestsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequestsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRequestsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
