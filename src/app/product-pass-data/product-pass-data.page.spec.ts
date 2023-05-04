import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPassDataPage } from './product-pass-data.page';

describe('ProductPassDataPage', () => {
  let component: ProductPassDataPage;
  let fixture: ComponentFixture<ProductPassDataPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductPassDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
