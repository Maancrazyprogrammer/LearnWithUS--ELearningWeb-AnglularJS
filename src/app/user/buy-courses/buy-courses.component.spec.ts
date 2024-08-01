import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCoursesComponent } from './buy-courses.component';

describe('BuyCoursesComponent', () => {
  let component: BuyCoursesComponent;
  let fixture: ComponentFixture<BuyCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuyCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
