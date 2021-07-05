
class Addition {
    constructor (num) {
        this.num = num;
    }

    add (...nums) {
        const sum = (a, b) => a + b;
        return this.num + nums.reduce(sum);
    }
}
// Write you code here
function genaLog(func) {
    return function() {
        let abc = func.apply(this, arguments);
        console.log("called");
        return abc;
    }
}

Addition.prototype.add = genaLog(Addition.prototype.add)

// End of code


const startedValue = new Addition(5);
let result = startedValue.add(3,5,6) //В консоль выводится "called"
console.log(result); //В консоль выводится 19
