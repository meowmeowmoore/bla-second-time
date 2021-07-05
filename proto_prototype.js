//
//
// function Gena (name) {
//     this.name = name;
//
//     this.nameLog = function () {
//         console.log(this.name);
//     }
// }
//
// let gena = new Gena('Petya');
//
// gena.nameLog()
//
// class Gennu {
//     constructor (name) {
//         this.name = name;
//     }
//     nameLog () {
//         console.log(this.name);
//     }
// }
//
// let gennu = new Gennu('Zhenya');
// gennu.nameLog()

//decorator function
/*const allArgsValid = function(fn) {
    return function(...args) {
        console.log(fn.length)
        if (args.length !== fn.length) {
            throw new Error('Only submit required number of params');
        }
        const validArgs = args.filter(arg => Number.isInteger(arg));
        if (validArgs.length < fn.length) {
            throw new TypeError('Argument cannot be a non-integer');
        }
        return fn(...args);
    }
}

let multiply = function(a,b){
    return a*b;
}

console.log(multiply.length)


//decorated multiply function that only accepts the required number of params and only integers
multiply = allArgsValid(multiply);

console.log(multiply(6, 8));*/
//48
// multiply(6, 8, 7);
//Error: Only submit required number of params
// multiply(3, null);
//TypeError: Argument cannot be a non-integer
// multiply('',4);
//TypeError: Argument cannot be a non-integer

// console.log(Number('str'));
// console.log(Number(''));
// console.log(Number(" "));
// console.log(String(1))
// console.log(Number(null))
// console.log(Number(undefined));
// console.log(Number(true))
// console.log(Boolean(' '))
// console.log(Boolean(''), 'dd')
// console.log(Boolean(1))
// console.log(Boolean(null))
// console.log(Boolean(undefined))
// console.log(Boolean(NaN))

class Hello
{
    static message() {
        return "hello world";
    }
}

// let hello = new Hello()

console.log(Hello.message());