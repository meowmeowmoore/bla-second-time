const debounce = (fn, debounceTime) => {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(this, args), debounceTime);
    }
};

// let counter = 0;
const fn = () => console.log;

const debouncedFn = debounce(fn, 200);
debouncedFn(1); // первый вызов
setTimeout(() => debouncedFn(2), 100); // вызов через 100 мс после последнего вызова
// первый вызов был заблокирован, второй ожидает окончания таймера
setTimeout(() => debouncedFn(3), 200); // вызов через 100 мс после последнего вызова
// второй вызов был заблокирован, третий ожидает окончания таймера
setTimeout(() => debouncedFn(4), 300); // ...
setTimeout(() => debouncedFn(5), 400); // после этого вызова не следует других вызовов
// только этот вызов сработает, т.к. после него прошло 200 мс и других вызовов не было
// console.log(counter, 'I MUST BE THE ONE'); // 1