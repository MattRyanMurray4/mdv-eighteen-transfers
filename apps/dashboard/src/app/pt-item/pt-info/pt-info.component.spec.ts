import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtInfoComponent } from './pt-info.component';

describe('PtInfoComponent', () => {
  let component: PtInfoComponent;
  let fixture: ComponentFixture<PtInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
