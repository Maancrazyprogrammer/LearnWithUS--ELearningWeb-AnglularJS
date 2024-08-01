import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDescComponent } from './course-desc.component';

describe('CourseDescComponent', () => {
  let component: CourseDescComponent;
  let fixture: ComponentFixture<CourseDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDescComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
