// let input = [
//     ['usd', 'buy', 10000],
//     ['usd', 'sell', 5000],
//     ['gbp', 'buy', 9000],
//     ['eur', 'sell', 7000],
//     ['uah', 'buy', 10000],
//     ['usd', 'sell', 25000]
// ]
//
//
//
//     let output = {};
//     input.forEach(operation => {
//         let arrSum = []
//         let arrBuy = []
//         if (operation[1] === 'buy') {
//             arrSum.push(operation[2])
//             // console.log(arrSum)
//             output[operation[0]] = operation[2];
//         } else {
//             arrBuy.push(operation[2])
//             console.log(arrBuy)
//             output[operation[0]] = operation[2];
//         }
//
//          // console.log(output)
//     })
//
//
// // let output = {
// //     usd: [10000, 30000],
// //     gbp: [9000, 0],
// //     eur: [0, 7000],
// //     uah: [10000, 0]
// // }

class MyErrorllsdls extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}

let epep = new MyErrorllsdls('llll')
console.log(epep.name)