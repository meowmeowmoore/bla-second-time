
async function promisesInSeries(asyncFns, res = 0) {
    for (let item of asyncFns) {
        // console.log(res, '1')
        if (asyncFns.indexOf(item) === 0) {
            res = await item(undefined)
            // console.log(res, 'index 0')
        } else {
            // console.log(res, 'index previous')
            res = await item(res)
            // console.log(res, 'index current')
        }
    }
    if (asyncFns.length === 0){
        return undefined;
    } else {
        return res;
    }
}

const firstPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(300)), 300);

const secondPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(200)), 200);

const thirdPromise = () =>
    new Promise((resolve) => setTimeout(() => resolve(100)), 100);

console.log(promisesInSeries([]));
// Выполнит resolve(300) через 300 мс, потом resolve(200) через 200 мс, потом resolve(100) через 100 мс
