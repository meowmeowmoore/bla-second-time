let worker = {
    someMethod() {
        return 1;
    },
    superDifficultFunc(x) {
        console.log(`Супер сложные вычисления с ${x}`);
        return x + this.someMethod();
}
}

// console.log(superDifficultFunc('иксик'))

function cacheFuncDecorator(fun) {
    let cache = new Map();
    console.log(cache);

    return function(x) {
        console.log(cache.has(x))
        if (cache.has(x)) {
            console.log(`I've already seen it`);
            return cache.get(x);
        } else {
            console.log('I see it the first time :o')
            let result = fun(x);
            cache.set(x, result);
            return result;
        }

    }
}

// console.log(worker.superDifficultFunc(5));

let func = worker.superDifficultFunc;
console.log(func.call(worker, 3))

let func1 = worker.superDifficultFunc;
console.log(func1.call(worker,5));
console.log(func1.call(worker,2));
console.log(func1.call(worker,2));
// console.log(superDifficultFunc(5), 'Again');
//
// console.log(superDifficultFunc(7));
// console.log(superDifficultFunc(7), 'Again');
