localStorage.setItem('counters', "<anonymous>");
// localStorage.setItem('counters', JSON.stringify({bannerClick: 5}))

function incrementCounter(counterName){
    let obj = {};

    try {
        let obj = localStorage.getItem('counters');
        obj = JSON.parse(obj);

        if((localStorage.getItem("counters")).includes(counterName)) {
            ++obj[counterName];
        } else {
            obj[counterName] = 1;
        }

        localStorage.setItem('counters', JSON.stringify(obj));

        return obj[counterName];
    } catch {
        obj[counterName] = 1;
        localStorage.setItem('counters', JSON.stringify(obj));
        return obj[counterName];

    }
}


// в localStorage 1 счетчик: bannerClick = 5
console.log(incrementCounter('bannerClick')); // 6
console.log(incrementCounter('bannerClick')); // 6
console.log(incrementCounter('bannerClsose')); // 1
// в localStorage 2 счетчика: bannerClick = 6, bannerClose = 1