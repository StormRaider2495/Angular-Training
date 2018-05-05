import { Component, OnInit } from '@angular/core';
import { CalculatorModel } from '../calculator-one/calculator.Model';


@Component({
  selector: 'app-calculator-two',
  templateUrl: './calculator-two.component.html',
  styleUrls: ['./calculator-two.component.css']
})
export class CalculatorTwoComponent implements OnInit {
  operation: string;
  model: CalculatorModel;
  constructor() {
    this.model = new CalculatorModel();
  }

  ngOnInit() {
  }

  onCalculate() {
    this.model[this.operation]();
  }

}
