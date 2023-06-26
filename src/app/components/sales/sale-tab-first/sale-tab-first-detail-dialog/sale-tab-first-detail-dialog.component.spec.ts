import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabFirstDetailDialogComponent } from './sale-tab-first-detail-dialog.component';

describe('SaleTabFirstDetailDialogComponent', () => {
  let component: SaleTabFirstDetailDialogComponent;
  let fixture: ComponentFixture<SaleTabFirstDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleTabFirstDetailDialogComponent]
    });
    fixture = TestBed.createComponent(SaleTabFirstDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
