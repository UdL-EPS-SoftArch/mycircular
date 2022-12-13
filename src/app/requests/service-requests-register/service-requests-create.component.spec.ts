import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceRequestsCreateComponent } from './service-requests-create.component';

describe('ServiceRequestsCreateComponent', () => {
  let component: ServiceRequestsCreateComponent;
  let fixture: ComponentFixture<ServiceRequestsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceRequestsCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceRequestsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
