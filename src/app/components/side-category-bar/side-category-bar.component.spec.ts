import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCategoryBarComponent } from './side-category-bar.component';

describe('SideCategoryBarComponent', () => {
  let component: SideCategoryBarComponent;
  let fixture: ComponentFixture<SideCategoryBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCategoryBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
