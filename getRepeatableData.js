class AttemptsLimitExceeded extends Error {
    constructor() {
        super('Max attempts limit exceed');
        this.name = 'AttemptsLimitExceeded';
    }
}

class NotFoundError extends Error {
    constructor() {
        super('Not found');
        this.name = 'NotFoundError';
    }
}

class TemporaryError extends Error {
    constructor() {
        super('TemporaryError');
        this.name = 'TemporaryError';
    }
}

// const getData = (key) => 'hello' + key;
// const getData = function (key) {
//     throw new NotFoundError;
// }
const getData = function (key) {
    throw new TemporaryError;
}

function getRepeatableData(getData, key, maxRequestsNumber) {
    if (maxRequestsNumber === undefined) {
        maxRequestsNumber = Infinity;
    }
    try {
        return getData(key);
    } catch (err) {
        if (err.name === "NotFoundError") {
            throw err;
        } else if (err.name === "TemporaryError") {
            maxRequestsNumber--;
            console.log(maxRequestsNumber)
            if (maxRequestsNumber > 0) {
                return getRepeatableData(getData, key, maxRequestsNumber);
            } else {
                throw new AttemptsLimitExceeded;
            }
        }
    }
}

const res = getRepeatableData(getData, '1', 3); // 'hello1'
console.log(res)