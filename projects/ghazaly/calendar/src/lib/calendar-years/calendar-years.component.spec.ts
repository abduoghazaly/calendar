import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarYearsComponent } from './calendar-years.component';

describe('CalendarYearsComponent', () => {
  let component: CalendarYearsComponent;
  let fixture: ComponentFixture<CalendarYearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalendarYearsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalendarYearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
