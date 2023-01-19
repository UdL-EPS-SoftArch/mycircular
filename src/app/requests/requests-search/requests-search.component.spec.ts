import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestsSearchComponent } from './requests-search.component';

describe('RequestsSearchComponent', () => {
  let component: RequestsSearchComponent;
  let fixture: ComponentFixture<RequestsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestsSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
