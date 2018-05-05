import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorTwoComponent } from './calculator-two.component';

describe('CalculatorTwoComponent', () => {
  let component: CalculatorTwoComponent;
  let fixture: ComponentFixture<CalculatorTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
