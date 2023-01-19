import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestsRegisterComponent } from './product-requests-register.component';

describe('ProductRequestsRegisterComponent', () => {
  let component: ProductRequestsRegisterComponent;
  let fixture: ComponentFixture<ProductRequestsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequestsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRequestsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
