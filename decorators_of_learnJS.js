function work (a, b) {
    return a + b;
}
//
function spy (func) {
    return function (a, b) {
     let obj = {
        calls: [],
     }
     console.log(a, b)
     return obj.calls.push(a, b);
//Здесь должен быть написан код, который сохраняет
//  в calls массив вызовов
    }
}
// function work(a, b) {
//     console.log( a + b ); // произвольная функция или метод
// }
//
work = spy(work);

console.log(work(1, 2)); // 3
// work(4, 5); // 9
//
// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }