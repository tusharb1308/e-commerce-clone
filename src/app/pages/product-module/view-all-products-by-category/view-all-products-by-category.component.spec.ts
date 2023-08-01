import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category.component';

describe('ViewAllProductsByCategoryComponent', () => {
  let component: ViewAllProductsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllProductsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllProductsByCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
