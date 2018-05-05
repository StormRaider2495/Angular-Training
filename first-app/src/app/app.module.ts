import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent} from './greeter/greeter.component';
import { CalculatorOneComponent } from './calculator-one/calculator-one.component';
import { CalculatorTwoComponent } from './calculator-two/calculator-two.component';
import { CalculatorResultComponent } from './calculator-result/calculator-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorOneComponent,
    CalculatorTwoComponent,
    CalculatorResultComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
