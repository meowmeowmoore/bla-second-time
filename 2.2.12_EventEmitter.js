class EventEmitter {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);

    }
    off(eventName, callback) {
        if (this.events[eventName]) {
            this.events[eventName] = this.events[eventName].filter(eventCallback =>
                callback !== eventCallback);
        }
    }
    once(eventName, callback) {
        const fun = (...args) => {
            this.off(eventName, fun);
            callback(...args);
        }
        this.on(eventName, fun)
    }
    emit(eventName, ...args) {
        if (this.events[eventName]) {
            this.events[eventName].forEach(fun => fun(...args));
        }
    }
}

class BroadcastEventEmitter extends EventEmitter {
    emit(eventName, ...args) {
        for (let key in this.events) {
            this.events[key].forEach(fun => fun(...args));
        }

    }
}

//
// let input = document.querySelector('input');
// let button = document.querySelector('button');
// let h1 = document.querySelector('h1');

let emitter = new EventEmitter();
let broadcastEE = new BroadcastEventEmitter();

emitter.on('sayHello', fun => console.log("Heooo"));

console.log(broadcastEE.emit('sayHello', fun => console.log("Hi")))

