let animal = {
    eats: true
};

Object.creator = function(proto, propertiesObject) {
    let newObj = {};
    if (proto !== undefined) {
        // console.log('!')
        Object.setPrototypeOf(newObj, proto);

            return Object.defineProperties(newObj, {...propertiesObject});

    } else {
        throw new TypeError();
    }

};

console.log(Object.creator(animal, {
    jumps: {
        value: true
    }
}));

debugger



// const A = {
//     objectName: 'Object A',
//     getObjectName: function() {
//         return `This is ${this.objectName}!`;
//     },
// };
//
// const B = Object.create(A, {
//     objectName: {
//         value: 'Object B',
//     },
// });
//
// console.log(A.getObjectName()); // This is Object A!
// console.log(B.getObjectName()); // This is Object B!
//
// console.log(A.hasOwnProperty('getObjectName')); // true
// console.log(A.hasOwnProperty('objectName')); // true
//
// console.log(B.hasOwnProperty('getObjectName')); // false
// console.log(B.hasOwnProperty('objectName')); // true