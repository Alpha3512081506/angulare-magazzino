import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPracticeComponent } from './product-practice.component';

describe('ProductPracticeComponent', () => {
  let component: ProductPracticeComponent;
  let fixture: ComponentFixture<ProductPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
