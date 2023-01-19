import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestsDeleteComponent } from './service-requests-delete.component';

describe('ServiceRequestsDeleteComponent', () => {
  let component: ServiceRequestsDeleteComponent;
  let fixture: ComponentFixture<ServiceRequestsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
