import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailesComponent } from './details-product.component';

describe('DetailsProductComponent', () => {
  let component: ProductDetailesComponent;
  let fixture: ComponentFixture<ProductDetailesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailesComponent]
    });
    fixture = TestBed.createComponent(ProductDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
