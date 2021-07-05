//RESOLVE CAN BE THE FIRST TIME IN THE PROMISE
function promiseAll(promises) {
    return new Promise (async (resolve, reject) => {
        let arr = [];
        for (let prom of promises) {
            let value = await prom;
            arr.push(value);

        }
        resolve(arr);
        // setTimeout(() => resolve(arr), 2000)
    })
    // if (promises.length !== 0) {
    //     console.log(promises.shift(), 'promises[0]')
    //     promises.shift().then(value => {
    //         arr.push(value)
    //         return promiseAll(promises, arr);
    //     })
    // } else {
    //     return new Promise((resolve, reject) => {
    //         resolve(arr);
    //     })
    // }
}

const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 300)
);

// firstPromise.then(console.log)

// firstPromise.then(value => {a.push(value); console.log(a, 'P')})

//
const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 200)
);
// secondPromise.then(value => {a.push(value); console.log(a, 'P2')})

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 100)
);

// thirdPromise.then(value => {a.push(value); console.log(a, 'P3')})

promiseAll([firstPromise, secondPromise, thirdPromise])
    .then(console.log)  // [300, 200, 100]
//


// let promises = [firstPromise, secondPromise, thirdPromise]
//
// promises.forEach(prom => {
//     console.log(prom, 'PROM');
//     prom.then(val => {a.push(val); console.log(a)})
// })