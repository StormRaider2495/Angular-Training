import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorOneComponent } from './calculator-one.component';

describe('CalculatorOneComponent', () => {
  let component: CalculatorOneComponent;
  let fixture: ComponentFixture<CalculatorOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
