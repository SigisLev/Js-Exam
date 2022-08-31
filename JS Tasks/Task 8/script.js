/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b, operator) {
  this.a = a;
  this.b = b;
  this.operator = operator;
  this.calculate = function () {
    switch (this.operator) {
      case 'add':
        return this.a + this.b;
      case 'sub':
        return this.a - this.b;
      case 'mul':
        return this.a * this.b;
      case 'div':
        return this.a / this.b;
      default:
        return 'Error!';
    }
  };
}
const calc = new Calculator(200, 2, 'div');
console.log(calc.calculate());
