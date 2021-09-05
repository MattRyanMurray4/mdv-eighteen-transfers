import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtListComponent } from './pt-list.component';

describe('PtListComponent', () => {
  let component: PtListComponent;
  let fixture: ComponentFixture<PtListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PtListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PtListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
