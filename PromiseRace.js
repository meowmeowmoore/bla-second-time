
function promiseRace(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(prom => {
            prom.then(resolve)
                .catch(reject)
        });
    });
}

// const errPromise = new Promise ((resolve, reject) =>
//     setTimeout(() => reject(new Error("Ошибка!")), 50));

// console.log(errPromise, 'errPromise')
// errPromise.then(value => console.log(value, 'value errPromise'))
//     .catch(error => console.log(error, 'ERROR'))


const firstPromise = new Promise((resolve) =>
    setTimeout(() => resolve(300), 3000)
);
// console.log(firstPromise, 'firstPromise')
// firstPromise.then(value => console.log(value, 'value'))
//     .catch(error => console.log(error, 'error'))

const secondPromise = new Promise((resolve) =>
    setTimeout(() => resolve(200), 2000)
);

// console.log(secondPromise, 'secondPromise')
// secondPromise.then(value => console.log(value, 'value secondPromise'))
//     .catch(error => console.log(error, 'error secondPromise'))

const thirdPromise = new Promise((resolve) =>
    setTimeout(() => resolve(100), 1000)
);
// thirdPromise.then(value => console.log(value, 'value thirdPromise'))
//     .catch(error => console.log(error, 'error thirdPromise'))


console.log(promiseRace([firstPromise, secondPromise, thirdPromise])); // 100
// console.log(promiseRace([errPromise])); // 100