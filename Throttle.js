const throttle = (fn, throttleTime) => {
    let called = true;
    let nowThis;
    let nowArg;

    return function wrapper(...args) {
        if (!called) {
            return;
        }
        fn.apply(this, args);
        called = false;
        setTimeout(() => {
            called = true;
        }, throttleTime);
    }

}

let counter = 0;
const fn = () => {
    counter++;
    console.log(counter, 'hi', 'counter', new Date())
};

const throttledFn = throttle(fn, 5000); // функция может быть вызвана не чаще, чем раз в 500 мс


const intervalId = setInterval(throttledFn, 1000);
setTimeout(() => clearInterval(intervalId), 10000); // удаляем интервал через 10 вызовов
//
setTimeout(() => console.log(counter), 10000);
