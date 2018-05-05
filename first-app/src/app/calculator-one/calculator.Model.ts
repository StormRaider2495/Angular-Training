export class CalculatorModel {
    n1: number;
    n2: number;
    result: number;
    add() {
        this.result = this.n1 + this.n2;
    }
    subtract() {
        this.result = this.n1 - this.n2;
    }
    multiply() {
        this.result = this.n1 * this.n2;
    }
    divide() {
        this.result = this.n1 / this.n2;
    }
}
