import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsDeleteComponent } from './requests-delete.component';

describe('RequestsDeleteComponent', () => {
  let component: RequestsDeleteComponent;
  let fixture: ComponentFixture<RequestsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
