import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialoggComponent } from './confirm-dialogg.component';

describe('ConfirmDialoggComponent', () => {
  let component: ConfirmDialoggComponent;
  let fixture: ComponentFixture<ConfirmDialoggComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialoggComponent]
    });
    fixture = TestBed.createComponent(ConfirmDialoggComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
