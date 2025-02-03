import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCategoryListComponent } from './news-category-list.component';

describe('NewsCategoryListComponent', () => {
  let component: NewsCategoryListComponent;
  let fixture: ComponentFixture<NewsCategoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCategoryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
