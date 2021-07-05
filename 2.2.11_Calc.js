
class Calc {
    constructor(num) {
        num === undefined ? this.num = 0 : this.num = num;
    }

    add(someNumber) {
        if (arguments.length === 0) {
            someNumber = 0;
        }
        return new Calc(this.num + someNumber);
    }

    sub(someNumber) {
        if (arguments.length === 0) {
            someNumber = 0;
        }
        return new Calc(this.num - someNumber);
    }

    result() {
        this.num2 = this.num;
        this.num = 0;

        return this.num2;
    }

}

const calc = new Calc(0);

console.log(calc.add(5).sub(2).result()) //toBe(5);

console.log(calc.add(5).result()) //toBe(5);
console.log(calc.add(10).result()) //toBe(10);


// const calc = new Calc(2);
// // console.log(calc, 'Объект класса');
//
// const calc2 = calc.add(2);
// const calc3 = calc.add(3);
// console.log(calc2.result()) //toBe(4);
// console.log(calc3.result()) //toBe(5);

//ОТВЕТ ДОЛЖЕН ВЫВОДИТЬСЯ ТОЛЬКО ПРИ ВЫЗОВЕ РЕЗАЛТ, ПРИ ВЫЗОВЕ ДРУГИХ МЕТОДОВ - СОЗДАЕТСЯ НОВЫЙ ОБЪЕКТ КЛАССА, КОТОРЫЙ
// ХРАНИТСЯ В ПЕРЕМЕННОЙ CALC2   И CALC3 СООТВЕТСВЕННО


// class Nina {
//     constructor (n, a) {
//         this.n = n;
//         this.a = a;
//     }
//     sayHello () {
//         return new Nina('Net', 'omlet');
//     }
// }
//
// const nina = new Nina('Priv','Nina');
// console.log(nina)
//
// const nina2 = nina.sayHello();
// console.log(nina2)