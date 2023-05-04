import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductPassDataNavParamsPage } from './product-pass-data-nav-params.page';

describe('ProductPassDataNavParamsPage', () => {
  let component: ProductPassDataNavParamsPage;
  let fixture: ComponentFixture<ProductPassDataNavParamsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProductPassDataNavParamsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
