import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtItemComponent } from './pt-item.component';

describe('PtItemComponent', () => {
  let component: PtItemComponent;
  let fixture: ComponentFixture<PtItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
