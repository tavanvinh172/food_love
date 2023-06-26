import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabFirstDetailComponent } from './sale-tab-first-detail.component';

describe('SaleTabFirstDetailComponent', () => {
  let component: SaleTabFirstDetailComponent;
  let fixture: ComponentFixture<SaleTabFirstDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleTabFirstDetailComponent]
    });
    fixture = TestBed.createComponent(SaleTabFirstDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
