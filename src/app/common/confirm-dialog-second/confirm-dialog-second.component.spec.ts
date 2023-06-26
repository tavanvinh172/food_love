import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogSecondComponent } from './confirm-dialog-second.component';

describe('ConfirmDialogSecondComponent', () => {
  let component: ConfirmDialogSecondComponent;
  let fixture: ComponentFixture<ConfirmDialogSecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmDialogSecondComponent]
    });
    fixture = TestBed.createComponent(ConfirmDialogSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
