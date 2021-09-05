import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtDetailsComponent } from './pt-details.component';

describe('PtDetailsComponent', () => {
  let component: PtDetailsComponent;
  let fixture: ComponentFixture<PtDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
