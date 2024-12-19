import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSmallCarouselComponent } from './item-small-carousel.component';

describe('ItemSmallCarouselComponent', () => {
  let component: ItemSmallCarouselComponent;
  let fixture: ComponentFixture<ItemSmallCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemSmallCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemSmallCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
