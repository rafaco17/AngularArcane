import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSectionComponent } from './characters-section.component';

describe('CharactersSectionComponent', () => {
  let component: CharactersSectionComponent;
  let fixture: ComponentFixture<CharactersSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
