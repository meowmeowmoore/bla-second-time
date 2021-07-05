// const obj = {
//     id2: {name: 'Alex', age: 70},
//     id6: {name: 'Elon'},
//     id3: {"lastName": "Ivanov",
//         "name": "Pavel",
//         "profession": "programmer",
//     },
//     id4: {
//         "name": "Petr",
//     },
//     id5: {
//         "city": "St. Petersburg",
//         "name": "Lena",
//     },
//     id7: {
//         "age": 25,
//         "hobbys": [
//             "traveling",
//             "macrame"
//         ],
//         "name": "Olesya",
//     }
// };
//
// let db = {
//     getUsersIds (ids) {
//         // let arrKey =
//         setTimeout(()=> ids(Object.keys(obj), Math.random() * 500));
//
//     },
//     getUserInfo (someUserId, someInfo) {
//         //Принимает переменную и функцию, к-я возвращает информацию
//         //по выбранному пользователю
//         setTimeout(()=> someInfo(obj[someUserId]), Math.random() * 500)
//
//     }
// }
//
// const { getUserInfo, getUsersIds } = db;
//
// // function getUsersInfo(onLoad) {
// //     let arrInfo = [];
// //
// //
// //     let nina = (ids = []) => {
// //         if (ids.length !== 0) {
// //             getUserInfo(ids.shift(), someInfo => {
// //                arrInfo.push(someInfo);
// //                    nina(ids);
// //             })
// //         } else {
// //             onLoad(arrInfo);
// //         }
// //     }
// //
// //     getUsersIds((ids) => nina(ids));
// // }
//
// function getUsersInfo(onLoad) {
//     let gen = [];
//     let arrId = [];
//     while(arrId.length === 0) {
//         getUsersIds(ids => arrId = ids);
//     }
//     setTimeout(() => {
//         arrId.forEach(el => {
//             // console.log('now here')
//             getUserInfo(el, (per) => gen.push(per));
//         })
//     }, 100);
//
//     setTimeout(()=> onLoad(gen), 200);
// }
//
// console.log(getUsersInfo((arrInfo) => {
//     console.log(arrInfo)
// }))
// // [ { name: 'Alex', age: 70 }, { name: 'Elon' } ]

let isMomHappy = false;

// Promise
let willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            let phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // Всё выполнено
        } else {
            let reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

// Вызываем промис
let askMom = function () {
    willIGetNewPhone
        .then(function (fulfilled) {
            // yay, you got a new phone
            console.log(fulfilled);
            // output: { brand: 'Samsung', color: 'black' }
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
            // output: 'mom is not happy'
        });
};

askMom();