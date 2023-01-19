import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestsDetailComponent } from './service-requests-detail.component';

describe('ServiceRequestsDetailComponent', () => {
  let component: ServiceRequestsDetailComponent;
  let fixture: ComponentFixture<ServiceRequestsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestsDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
