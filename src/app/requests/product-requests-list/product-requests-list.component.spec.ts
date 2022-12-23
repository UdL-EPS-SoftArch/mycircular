import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRequestsListComponent } from './product-requests-list.component';

describe('ProductRequestsListComponent', () => {
  let component: ProductRequestsListComponent;
  let fixture: ComponentFixture<ProductRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductRequestsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
