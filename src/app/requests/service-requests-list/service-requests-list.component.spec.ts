import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestsListComponent } from './service-requests-list.component';

describe('ServiceRequestsListComponent', () => {
  let component: ServiceRequestsListComponent;
  let fixture: ComponentFixture<ServiceRequestsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
