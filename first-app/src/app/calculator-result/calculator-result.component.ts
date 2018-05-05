import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculator-result',
  templateUrl: './calculator-result.component.html',
  styleUrls: ['./calculator-result.component.css']
})
export class CalculatorResultComponent implements OnInit {
  @Input() result;
  constructor() { }

  ngOnInit() {
  }

}
