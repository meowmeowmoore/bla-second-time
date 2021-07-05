
class ExecutionError extends Error {
    constructor(el, stack) {
        super();
        this.name = "ExecutionError"
        this.el = el;
        this.stack = stack;
    }
    getArgData() {
        return this.el;
    }
}

function applyFn(dataArr, callback) {
    let obj = {};
let arr1 = [];
let arr2 = [];
    dataArr.forEach(el => {
        try {
            arr1.push(callback(el));
            obj.succeeded = arr1;
        } catch (err) {
            err = new ExecutionError(el, err.stack);
            arr2.push(err);
            obj.errors = arr2;
        }
    })
    return obj;
}

//если галочка на 2м условии -  у кода нет никаких условий, те catch (err) {

//                 err = new ExecutionError(el);

//                 arr2.push(err);
//                 obj.errors = arr2;

// Выходит наим. ошибки эксекью ер, стек стрейс и наименование эл-та на котором возникла ошибка

// Если галочка на 3м условии - у кода есть условие

// catch (err) {
//     // if (err.name !== 'Error') {
//               err = new ExecutionError(el);
//        }
//     arr2.push(err);
//     obj.errors = arr2;
// }

// Выходит наим ошибки Ер, наим сообш, стек трейс, но неt эл-та на котором возникла ошибка





//каждый элемент массива ошибок создает новую переменную
// const { succeeded, errors } = applyFn([1, 2, 3], (arg) => arg + 1);
// //   succeeded: [2, 3, 4],
// //   errors: [],
// console.log(errors)
// console.log(succeeded)

// console.log(applyFn([1, 2, 3], () => {throw new TypeError('lohui')}))
const { succeed, error } = applyFn([1], () => {throw new Error('lohui')});
console.log(error, '1')
// // console.log(applyFn(dataArr))
// const dataArr = ['{"login":"login","password":"password"}', '{{}'];
// const callback = JSON.parse;
// const { succeeded, errors } = applyFn(dataArr, callback);
// console.log(succeeded);
// console.log(errors)
// //   succeeded: [{ login: 'login', password: "password" }],
// //   errors: [ExecutionError],
// //     console.log(errors[0])
//
// console.log(errors[0].getArgData())


//
// class ExecutionError extends Error {
//
//     getArgData() {
//         this.element;
//     }
// }
//
// function applyFn(dataArr, callback) {
//     let obj = {};
//     obj.errors = [];
//         dataArr.forEach(el => {
//             try {
//                 obj[succeeded].push(callback(el));
//             } catch (err) {
//                 err = new ExecutionError()
//                 obj.errors = [err.getArgData(el)]
//             }
//         });
//     return obj;
// }
//
