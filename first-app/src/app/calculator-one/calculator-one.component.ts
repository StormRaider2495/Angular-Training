import { Component, OnInit } from '@angular/core';
import { CalculatorModel } from './calculator.Model';

@Component({
  selector: 'app-calculator-one',
  templateUrl: './calculator-one.component.html',
  styleUrls: ['./calculator-one.component.css']
})
export class CalculatorOneComponent implements OnInit {

  model: CalculatorModel;
  constructor() {
    this.model = new CalculatorModel();
   }

  ngOnInit() {
  }

  // compute(action: string, num1: any, num2: any) {
  //   switch (action) {
  //     case 'Add':
  //       this.Result = parseFloat(num1) + parseFloat(num2);
  //       break;
  //     case 'Subtract':
  //       this.Result = parseFloat(num1) - parseFloat(num2);
  //       break;
  //     case 'Multiply':
  //       this.Result = num1 * parseFloat(num2);
  //       break;
  //     case 'Divide':
  //       this.Result = parseFloat(num1) / parseFloat(num2);
  //       break;
  //   }
  // }

}
