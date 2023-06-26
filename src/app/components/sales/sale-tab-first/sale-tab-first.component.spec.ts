import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTabFirstComponent } from './sale-tab-first.component';

describe('SaleTabFirstComponent', () => {
  let component: SaleTabFirstComponent;
  let fixture: ComponentFixture<SaleTabFirstComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaleTabFirstComponent]
    });
    fixture = TestBed.createComponent(SaleTabFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
