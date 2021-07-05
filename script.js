// ////////////////////////////////////////////////////////////////////
// ////// Задача 24
//
// const obj = Object.create(null);
// // function Gennan() {  }
// // const gena = Object.create(Gennan)
// //
// function isEmpty(obj) {
//     return Object.keys(obj).length === 0;
// }
// //
// console.log(isEmpty(obj)); // -> true
// // console.log(isEmpty(gena)); // -> false
// // console.log(isEmpty({ prop: 'value' })); // -> false)
//
// // const protoObj = {
// //     // name: "Chris",
// // };
// //
// // const obj = Object.create(protoObj);
//
// function isEmptyWithProtos(obj) {
//     return obj.__proto__ === undefined || isEmpty(obj) && isEmpty(obj.__proto__);
//     // console.log(obj.__proto__)
// }
//
// console.log(isEmptyWithProtos(obj)); // -> true
// console.log(isEmptyWithProtos({})); // -> false

////////////////////////////////////////////////////////////////////
////// Задача 23

// const getDaysBetweenDates = (date1, date2) => {
//
//     if (date1 !== undefined && date2 !== undefined) {
//         date1 = new Date(date1);
//         date2 = new Date(date2);
//
//         let pDate1 = Date.parse(date1);
//         let pDate2 = Date.parse(date2);
//
//         if (pDate2 > pDate1 || pDate2 === pDate1) {
//             if (!isNaN(pDate1) && !isNaN(pDate2)) {
//                 return Math.floor((pDate2 - pDate1) / 1000 / 60 / 60 / 24);
//             } else if (!isNaN(date1) && !isNaN(date2)) {
//                 return Math.floor((date2 - date1) / 1000 / 60 / 60 / 24);
//             }
//         } else if (new Date(date1).toString() === 'Invalid Date'
//             || new Date(date2).toString() === 'Invalid Date') {
//             return NaN;
//         } else {
//             if (!isNaN(pDate1 && !isNaN(pDate2))) {
//                 let k = Math.ceil((pDate2 - pDate1) / 1000 / 60 / 60 / 24)
//                 if (k === 0 || k === -0) {
//                     return k * -1;
//                 } else {
//                     return k;
//                 };
//             } else if (!isNaN(date1) && !isNaN(date2)) {
//                 return Math.ceil((date2 - date1) / 1000 / 60 / 60 / 24);
//             }
//         }
//     } else {
//         throw new TypeError()
//     }
//
// };
//
// console.log(getDaysBetweenDates('1-1-2020', '1-2-2020')); // -> 1
// console.log(getDaysBetweenDates('1-1-2020', '1-1-2020')); // -> 0
// console.log(getDaysBetweenDates(new Date(2011, 6, 2, 6, 0), new Date(2012, 6, 2, 18, 0))); // -> 366
// console.log(getDaysBetweenDates(1409796000000, 1409925600000)); // -> 1
// console.log(getDaysBetweenDates('1-s1-2020', 'дата')); // -> NaN
// console.log(getDaysBetweenDates(new Date(2014, 8, 5, 0, 0), new Date(2014, 8, 4, 23, 59))); //
// console.log(getDaysBetweenDates(null));

// // ////////////////////////////////////////////////////////////////
// // // Задача 22
// const data1 = [1, 2, 3, 3, 4, 4];

// const unique = (arr) => {
//    let set = new Set();
//    arr.forEach(el => {
//        set.add(el);
//    });
//    return Array.from(set);
//};

//console.log(unique(data1)); // [1, 2, 3, 4]
//
//const obj = { name: 'John' };
//const data2 = [obj, obj, obj, { name: 'John' }];
//const result = unique(data2);
//console.log(result); // [{ name: 'John' }, { name: 'John' }]
//
//console.log(result[0] === obj); // true
//console.log(result[1] === obj); // false


// // ////////////////////////////////////////////////////////////////
// // // Задача 21

// const obj = { name: 123 };

// const data = [1, 1, 1, 2, 2, 2, 2, true, true, obj, obj, { name: 123 }];

// // console.log(obj === data[data.length - 1])

// const getArraysCounts = (arr, count = 0) => {
// 	let map = new Map;
	

// 	arr.forEach( a => {

// 		if(map.has(a)) {
// 		  count += 1;
// 		   map.set(a, count)
// 		} else {
// 			count = 0;
// 			count += 1;
// 			map.set(a, count)
// 		}
// 	   // console.log(map, "map");
// 	});
// 	// console.log(map)
// 	return map;
// };

// const counts = getArraysCounts(data); // экземпляр Map
// console.log(counts.get(1)); // 3
// // console.log(counts.get(2)); // 4
// // console.log(counts.get(true)); // 2
// console.log(counts.get(obj)); // 2

////////////////////////////////////////////////////////////////
// Задача 20

// const data = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', year: 2019 },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', year: 2019 },
//   { firstName: 'Piter', lastName: 'G.', country: 'Sweden', continent: 'Europe', age: 30, language: 'JavaScript', year: 2019 },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', year: 2014 },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', year: 2016 },
// ];

// const getLanguagesStatistic = (feedbacks) => {
// 	let filt = feedbacks.filter(person => person.year === 2019);
// 	let obj = {};

// 	filt.forEach((el)  => {
// 		let count = 0;
		
// 		let {language} = el;
		
// 		filt.shift(el);
		
// 		if (filt.includes(el)) {
// 			count++;
// 		} 
// 		obj[language] = ++count;
// 	})
// 	return obj;
// };


// const result = getLanguagesStatistic(data);

// console.log(result);
// { 
//   C: 1, 
//   JavaScript: 2 
// }


////////////////////////////////////////////////////////////////
// Задача 19

// const merge = (...args) => {
// 	return Object.assign(...args);
// };

// console.log(
//   merge(
//     {
//       name: 'John',
//       age: 22,
//     },
//     {
//       surname: 'Klein',
//       age: 20,
//       profession: 'student',
//     },
//     {
//       profession: 'frontend developer',
//       country: 'USA',
//     }
//   )
// );


////////////////////////////////////////////////////////////////
// Задача 18

// const sum = (...args) => {
// 	args = args.filter(el => typeof el !== 'object' && !isNaN(el));
// 	return Number(args.reduce((prev, cur) => prev + cur, 0));
// };

// console.log(
//     sum(1, 2, 3, 4, 5, 6),
// ); // 21
// console.log(
//     sum(-10, 15, 100),
// ); // 105
// console.log(
//     sum(),
// ); // 0
// console.log(
//     sum(1, 'fqwfqwf', {}, [], 3, 4, 2, true, false),
// ); // 11. Прим: true было приведено к 1 (см. преобразование типов в js)
// console.log(sum(1, true, '', []));


////////////////////////////////////////////////////////////////
// Задача 17

// a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};
// b = {"name":"Misha","order":{"count":1,"price":20,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withTaxes":{"vat":{"uah":30,"usd":1.11}},"withoutTaxes":{"usd":0.74,"uah":20}}}}

// a = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11}}}}};
// b = {"name":"Misha","order":{"price":20,"count":1,"taxes":{"vat":{"name":"vat","amount":{"uah":10,"usd":0.37}}},"total":{"withoutTaxes":{"uah":20,"usd":0.74},"withTaxes":{"vat":{"uah":30,"usd":1.11,"eur":null}}}}}
// let a = {"name":"Misha","order":{"price":20}};
// let b = {"name":"Misha","order":{"price":20,"extraField":null}}

// function deepEqual (obj1, obj2, arrBoolObj = [ ]) {
// 	console.log(obj1, obj2, arrBoolObj, "start");

// 	if (typeof obj1 === "object" && typeof obj2 === "object" 
// 		&& obj1 !== null && obj2 !== null) {
			
// 		let arrBool = [];
// 		let arrObj1 = [];
// 		let arrObj2 = [];

// 		obj1 = Object.assign(obj1);
// 		obj2 = Object.assign(obj2);

// 		obj1 = Object.fromEntries(Object.entries(obj1).sort());
// 		obj2 = Object.fromEntries(Object.entries(obj2).sort());

// 		let arr1 = Object.values(obj1);
// 		let arr2 = Object.values(obj2);
		
// 		console.log('Массив значений');
		
// 		console.log(arr1, "1");
// 		console.log(arr2, "2");

// 		// Проверка на равенство длины массива, для того чтобы 
// 		// определить равенство кол-ва эл в нем. После делается
// 		// сортировка элементов по типу данных

// 		if (arr1.length === arr2.length) {
// 			arr1.forEach(el => {
// 				if (typeof el === "object" && el !== null) {
// 					arrObj1.push(el); 
// 				} else {
// 					arrBool.push(arr2.includes(el));
// 				}
// 			});
// 			arr2.forEach(el => {
// 				if (typeof el === "object" && el !== null) {
// 					arrObj2.push(el); 
// 				} else {
// 					arrBool.push(arr1.includes(el));
// 				}
// 			});

// 			console.log("Данные после сортировки элементов по типам данных");
// 			console.log(arrObj1, "1");
// 			console.log(arrObj2, "2");
// 			console.log(arrBool, "boolean");
// 			console.log(arrBoolObj, 'dllllllll')

// 			if (!arrBool.includes(false) 
// 				&& arrObj1.length === arrObj2.length) {
// 				if (arrObj1.length === 1 && arrObj2.length === 1) {
// 					arrBoolObj = deepEqual(arrObj1.reduce(el => el), 
// 						arrObj2.reduce(el => el), arrBoolObj);
// 					return arrBoolObj;
// 				} else if (arrObj1.length === 0 && arrObj2.length === 0) {
// 					return true;
// 				} else {
// 					for (let i = 0; i < arrObj1.length; i++) {
// 						console.log(arrObj1[i], '!!!!!!!!')
// 					arrBoolObj.push(deepEqual(arrObj1[i], arrObj2[i], arrBoolObj));
// 					}
// 				}
// 			} else {
// 				return false;
// 			}
// 		} else {
// 			return false;
// 		}
// 		return !arrBoolObj.includes(false);

// 	} else {
// 		return obj1 === obj2;
// 	}
// }

// console.log(deepEqual(a, b));

////////////////////////////////////////////////////////////////
// Задача 16

// function invert (obj) {
// 	console.log(obj);

// 	let newObj = Object.assign(obj);
// 	console.log(newObj);

// 	let arrays = Object.entries(newObj)
// 	arrays.map(arr => arr.reverse());
// 	console.log(arrays)

// 	newObj = Object.fromEntries(arrays);
// 	return newObj; 
// }



// invert({ a: 1, b: 2, c: 3 }) // { 1: a, 2: b, 3: c }


////////////////////////////////////////////////////////////////
// Задача 15

// let styles = ["Джаз", "Блюз"];
// console.log(styles);

// styles.push("Рок-н-ролл");
// console.log(styles);

// styles.splice((Math.round(styles.length / 2) - 1), 1, 'Классика');
// console.log(styles);

// let removed = styles.shift();
// console.log(removed);
// console.log(styles);

// styles.unshift('Рэп', 'Регги');
// console.log(styles);

////////////////////////////////////////////////////////////////
// Задача 14

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // ?

////////////////////////////////////////////////////////////////
// Задача 13

// const data =[
//     // { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     // { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]


// const getMostSenior = humans => {
// 	let maxAge = humans.reduce((prev, current) => {
// 		if (prev.age > current.age) {
// 			return prev;
// 		} else {
// 			return current.age;
// 		}
// 	});
// 	console.log(maxAge)
// 	return humans.filter(person => person.age === maxAge)
// };

// const result = getMostSenior(data);
// console.log(result);
// [
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]
////////////////////////////////////////////////////////////////
// Задача 12

// const data = [
//   {
//     type: 'food',
//     price: 130,
//   },
//   {
//     type: 'clothes',
//     price: 7300,
//   },
//   {
//     type: 'other',
//     price: 1400,
//   },
// ];

// const calculatePrice = (orders) => {
// 	if (!orders) {
// 		return 0;
// 	}
// 	return orders.reduce((acc, item) => acc += item.price, 0); 
// };


// console.log(calculatePrice()); // 8830‬

////////////////////////////////////////////////////////////////
// Задача 11

// const data = [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];

// const createUsernames = users => {
// 	return users.map(user => {
// 		let date = new Date();
// 		let yearOfBorn = date.getFullYear() - user.age;

// 		user.username = user.firstName + user.lastName;
// 		let nicknameArr = user.username.split('');
// 		nicknameArr.pop(nicknameArr[nicknameArr.length - 1]);
// 		user.username = nicknameArr.join('').toLowerCase() + String(yearOfBorn);
		
// 		return user;
// 	});
// };

// const processedData = createUsernames(data);
// console.log(processedData); 
// console.log(processedData);// [
// { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
//  username: 'emilyn1990' },
// { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
//  username: 'nore2000' }
// ];

// let example = { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30,};

// let date = new Date();
// let yearOfBorn = date.getFullYear() - example.age;
// // console.log(yearOfBorn);

// example.nickname = example.firstName + example.lastName;
// let nicknameArr = example.nickname.split('');
// nicknameArr.pop(nicknameArr[nicknameArr.length - 1]);
// example.nickname = nicknameArr.join('').toLowerCase() + String(yearOfBorn);

// console.log(example);
////////////////////////////////////////////////////////////////
// Задача 10

// const data = [
//   {
//     name: 'Denis',
//     age: 25,
//   },
//   {
//     name: 'Ivan',
//   },
//   {
//     name: 'Ann',
//     age: 18,
//   },
// ];

// const getField = (data, field) => {
//   console.log(data.map(user => user[field]));
//   // return data.map(user => user.field);
// };

// console.log(getField(data, 'age')); // [25, undefined, 18]

////////////////////////////////////////////////////////////////
// Задача 9

// const createObjectCalculator = (initialA, initialB) => {
// 	return {
// 		sum() {
// 			return initialA + initialB;
// 		},
// 		mul() {
// 			return initialA * initialB;
// 		},
// 		read(a, b) {
// 			initialA = a;
// 			initialB = b;
// 			return initialA, initialB;
// 		}, 
// 	}
// };

// // let calc = {
// // 	name: 'Nina',
// // 	age: 30,
// // 	getSum () {
// // 		console.log(this.name);
// // 	}
// // }

// // calc.getSum();

// const calculator = createObjectCalculator(2, 3);
// console.log(createObjectCalculator(2, 3));
// console.log(calculator.sum()); // 2 + 3 = 5
// console.log(calculator.mul()); // 2 * 3 = 6
// calculator.read(12, 34);
// console.log(calculator.sum()); // 12 + 34 = 46
// console.log(calculator.mul()); // 12 * 34 = 408


////////////////////////////////////////////////////////////////
// Задача 8

// let arr = [1, 2, 3, 4, 5, 6, 7, true, undefined, NaN];

// let array = [1, 2, 3, 3, 3, 4, 5, 6, 7, '8', 'some str', true, NaN];

// // console.log(arr.filter(el => el > 2 && el < 7));
// const inRange = (a, b) => {
// 	return function (el) {
// 		return el >= a && el <= b;
// 	}
// };

// const inArray = arr => {
// 	return function (el) {
// 		return arr.includes(el);
// 	}
// };

// const notInArray = arr =>  {
// 	return function (el) {
// 		return !arr.includes(el);
// 	}
// };


// console.log(arr.filter(inRange(3, 6))); // [3, 4, 5, 6]
// console.log(arr.filter(inArray([1, 2, 10, undefined]))); // [1, 2, undefined]
// console.log(array.filter(notInArray([1, NaN, true, '8', 212]))); // 


// let arrch = ['aa', 'aaa', 'aaaa', 'aaaaaaaaaaaa'];

// const loh = string => string.length > 2 && string.length < 5;

// console.log(arrch.filter(loh()))


////////////////////////////////////////////////////////////////
// Задача 7

///////////////////////////////Гена
// const fn = () => console.log('hi!');

// function once (fun) {

// 		let i = 0;
// 		return function() {
// 			if(i === 0) {
// 				fun()
// 				i++
// 			}		
// 		}
// } 

// const onceF = once(fn);
// console.log(onceF()); // hi!
// console.log(onceF()); // nothing
// console.log(onceF());console.log(onceF());console.log(onceF());


/////////////////////////////////////Нина
// const fn = () => console.log('hi!');

// function once (fun) {

// 		let arr = [];
// 		return function() {
// 			while (arr.length < 1) {
// 			arr.push(fun());
// 			// console.log(arr);			
// 		}
// 	}
// } 

// const onceF = once(fn);

///////// ЗАМЫКАНИЕ/////////EXAMPLE/////////////////////////////
// function foo (n) {
// 	return function (num) {
// 		console.log(n, 'n');
// 		console.log(num, 'num')
// 		return n + num;
// 	}
// }

// let fooN = foo(2);
// console.log(fooN(3));


// const foo = n => function (num) {
// 	return n + num;
// }

// let fooN = foo(2);
// console.log(fooN(3));
/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// Задача 6

// const numbers = [0, 1, 2, {}, false, "", "0"];


// function partition (array, callback) {
	
// 	let trueArray = [];
// 	let falseArray = [];
// 	let arr = [];
// 	if (callback) {
// 		for (let i = 0; i < array.length; i++) {
// 			if (callback(array[i])) {
// 				trueArray.push(array[i]);
// 			} else {
// 				falseArray.push(array[i]);
// 			}
// 		}
// 	} else if (!callback) {
// 		for (let i = 0; i < array.length; i++) {
// 			if (nina(array[i])) {
// 				trueArray.push(array[i]);
// 			} else {
// 				falseArray.push(array[i]);
// 			}
// 		}
// 	}

// 	arr.push(trueArray, falseArray);
// 	return arr;
// }


// let nina = function callback (element) {
// 	if (element) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// // console.log(nina)

// console.log(partition(numbers));


////////////////////////////////////////////////////////////////
// Задача 5
// const obj = {
//   a: {
//     b: {
//       // c: {
//         fn: function() {
//         	return 'Привет';
// 	        },
//       // }
//     }
//   }
// }

// const obj = {
//   father: {
//     // name: {
// 		hui: ["a", "sd", 'fd', 'ddd'],    	
//     // }
//   }
// }

// function optionalChaining (obj, chain, i = 0) {
// 	// if (chain.length !== 0) {
// 	console.log('!');
	
// 	// //Значение из обьекта по ключу, ключ взят из массива chain
// 		let valueByKeyFromArray = obj[chain[i]];
// 	console.log(valueByKeyFromArray, '1', i);
	
// 	// //Последний элемент массива 
// 		let lastKeyFromArray = chain[chain.length - 1];
// 	console.log(lastKeyFromArray, '2', i);
	
// 	// //Первый ключ из обьекта
// 		let firstKeyFromObj = Object.keys(obj);
// 	console.log(firstKeyFromObj, '3', i);
// 		let indexKey = firstKeyFromObj.indexOf(chain[i]);
// 	// console.log(indexKey, '4');

// 		if (firstKeyFromObj[indexKey] === chain[i] && chain.length !== 0) {
// 	console.log(chain[i] === lastKeyFromArray, 'lg');
// 			if (chain[i] === lastKeyFromArray) {
// 				return valueByKeyFromArray;
// 			}
// 			else {
// 			obj = optionalChaining(valueByKeyFromArray, chain, i += 1);
// 			// console.log(obj, chain[i], i, '22');
// 			}
// 		} else {
// 			return undefined;	
// 		}
// 	// } else {
// 		// return undefined;
// 	// }
// 	return obj;
// }

// console.log(optionalChaining(obj, ['father', "name"])); // undefined


// Напишите функцию, которая принимает первым параметром объект, 
// вторым - массив из цепочки свойств, по которому нужно пройти,
// чтобы получить значение.

// Если какое-то из свойств не найдено - функция возвращает undefined.

// Пример:

// console.log(optionalChaining(obj, ["a", "b", "c", "d"])); // Привет
// console.log(optionalChaining(obj, ["a", "b", "c", "d", "e"])); // undefined

// console.log(optionalChaining(obj, ['a', 'b', 'fn'])) // function
// console.log(optionalChaining(obj, [])) // undefined

////////////////////////////////////////////////////////////////
// Задача 4
// let acc = 0;
// function getStringCount(object, acc = 0) {
// 	console.log(typeof object, object, "Aa");
// 	object = Object.assign({}, object);
// 	console.log(typeof object, object, "Bb");
// 	for (let key in object) {
// 		console.log(typeof object[key], acc, object[key], key);

// 			if (typeof object[key] === 'string') {
// 				acc++;
// 			} else if (typeof object[key] === 'object' && object[key] !== null) {
// 				acc += getStringCount(object[key]);
// 			}
// 	}	
// 	return acc;
// }

// console.log(getStringCount([1, 2, 3, null, undefined, NaN]));
// console.log(getStringCount([]));
// console.log(getStringCount
// ({
//   first: '1',
//   second: '2',
//   // third: false,
//   fourth: {anytime: '2',
// 			time: {
// 				sorttime: 32,
// 				lalatime: 56,}
// 			},
//   //fifth:  null,
//   six: ['1', '2', ['3', ['4', 5, [6, '7']]]],
// }));
// console.log(getStringCount(['1', '2', ['3', ['4', 5, [6, '7']]]]));
// console.log(getStringCount(['1', 's2', '3']));

// Реализуйте (с использованием рекурсии) функцию getStringCount, 
// которая должна принимать массив или объект и считать количество 
// строк в массиве / значениях объекта с учетом вложенности.

// getStringCount
// ({
//   first: '1',
//   second: '2',
//   third: false,
//   fourth: ['anytime', 2, 3, 4 ],
//   fifth:  null,
// }); // 3

// getStringCount
// (['1', '2', ['3']]) // 3
// P.S. Для корректного прохождения проверку на рекурсию - вы должны 
// вызывать именно функцию getStringCount

// //////////////////////////////////////////////////////////////
//  Задача 3
// function sequenceSum (begin, end) {
// // let count = 0;
// 	if (begin > end) {
// 		return NaN;
// 	}
//    else if (begin === end) {
//    	// console.log(begin);
//    	return begin;
//    } else {
//    	return begin + sequenceSum(begin + 1, end);
//    		// console.log(count);
//    }

// }

// console.log(sequenceSum(7, 5));


// function factorial(n) {
// 	if(n === 1) {
// 		return n;
// 	}
// 	return n * factorial(n - 1);
// }

// Реализуйте (с использованием рекурсии) функцию sequenceSum, 
// которая находит сумму последовательности целых чисел. 
// Последовательность задается двумя значениями: 
// begin - начало последовательности, end - конец последовательности.
//  Например: begin = 2 и end = 6 дают нам такую
//   последовательность 2, 3, 4, 5, 6. Сумма такой
//    последовательности будет: 20.

// sequenceSum(1, 5); // 1 + 2 + 3 + 4 + 5 = 15
// sequenceSum(4, 10); // 4 + 5 + 6 + 7 + 8 + 9 + 10 = 49
// sequenceSum(-3, 2); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
// Подсказки

// Последовательность, в которой begin > end,
//  не содержит ни одного числа, т.е. является "пустой".
// Вычислить сумму чисел такой последовательности не
// представляется возможным, в этом случае возвращаем NaN
// Сумма чисел последовательности, в которой begin === end, равна
//  begin (или end)

// // NaN (т.к. это "пустая" последовательность)
// sequenceSum(7, 2);

// // 0 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(0, 0);
// // 6 (т.к. это единственное число, входящее в последовательность)
// sequenceSum(6, 6);
// P.S. Для корректного прохождения проверку на рекурсию - вы должны
//  вызывать именно функцию sequenceSum


// //////////////////////////////////////////////////////////////
//  Задача 2
// const getNumbersByParity = (data, parity) => {
// 	let arr = [];

// 	if (parity === 'even') {
// 		for (let i = 0; i < data.length; i++){
// 			if (data[i] % 2 === 0) {
// 				arr.push(data[i]);
// 			} 
// 		}
// 		console.log(arr);
// 	}

// 	if (parity === 'odd') {
// 		for (let i = 0; i < data.length; i++){
// 			if (data[i] % 2 !== 0) {
// 				arr.push(data[i]);
// 			} 
// 		}
// 		console.log(arr);
// 	}
// };

// const data = [1, 2, 3, 4, 5, 6];

// getNumbersByParity(data, 'odd')

// Реализуйте функцию getNumbersByParity, которая принимает
// массив чисел в качестве первого аргумента и строку
// "even" или "odd" в качестве второго. 
// Функция должна вернуть новый массив, состоящий из
// четных чисел, если вторым аргументом было передано 
// "even" и нечетных, если было передано "odd".

// Оба аргумента функции обязательны. Первый обязательно будет
//  массивом, а второй - строкой "even"/"odd".
//  const data = [1, 2, 3, 4, 5, 6];

// console.log(getNumbersByParity(data, 'even')); // [2, 4, 6];
// console.log(getNumbersByParity(data, 'odd')); // [1, 3, 5];


// //////////////////////////////////////////////////////////////
// Задача 1
// const hasArrays = (arr) => {
// let ninkis = [];

// for (let i = 0; i < arr.length; i++) {
// 	ninkis[i] = Array.isArray(arr[i]);
// }
// if (ninkis.includes(true)) {
// 	return console.log(true);
// } else {
// 	return console.log(false);
// }

// };

// hasArrays([false, true]);

// Реализуйте функцию hasArrays, которая 
// принимает массив данных разных типов и возвращает true, 
// если этот массив содержит массив внутри себя. Если нет, 
// функция должна вернуть false.
// Пример:
// const data1 = [false, true, [1, 2], {}, [], 1, 0, NaN];
// console.log(hasArrays(data1)); 
// // true

// const data2 = [];
// console.log(hasArrays(data2)); 
// // false

// ///////////////////////////////////////////////////////////////
// Задача -1
// const moveToStart = (arr, n) => {
//   // console.log(arr);
//   let arrNew = [];
//   console.log(arr.length)
//   if (arr.length > n) {
//     for (let i = 0; i < arr.length; i++) {
//       arrNew.push(arr[i]);
//       console.log(arrNew, 'first');
//     }
//     // console.log(arrNew, 'new arr')
//     let removed = arrNew.splice(arrNew.length - n, n).reverse();
    
//     for (let i = 0; i < removed.length; i++) {
  
//       arrNew.splice(0, 0, removed[i])
//     }
//   } else if (arr.length <= n){
//     for (let i = 0; i < arr.length; i++) {
//       arrNew.push(arr[i]); 
//       console.log(arrNew, 'second')
//     }
//   }

//   return arrNew;
// };

// moveToStart([1, 2, 3, 4, 5], 3);

// Реализуйте функцию moveToStart, которая принимает 
// массив и число n. Функция должна переставить n элементов 
// массива из конца в начало.
// Если второй аргумент больше или равен длине массива, 
// то должен быть возвращен новый массив, порядок элементов 
// которого совпадает с изначальным.
// Функция должна возвращать новый массив, а не мутировать старый.
// Примеры:
// console.log(
//   moveToStart([1, 2, 3, 4, 5], 3)
// ); // [3, 4, 5, 1, 2]
// console.log(
//   moveToStart([1, 2, 3, 4, 5], 3)
// ); // [3, 4, 5, 1, 2]
// console.log(
//   moveToStart([1, 2, 3, 4, 5], 10)
// ); // [1, 2, 3, 4, 5]


// //////////////////////////////////////////////////////////////
// Задача -2
// function replaceItemsClear(arr, item, replaceItem) {
  
//   let arrNew = [];
  
//   for (let i = 0; i < arr.length; i++) {
//       arrNew.push(arr[i]);
//   }
//   console.log('new array', arrNew);
  
//   for (let i = 0; i < arrNew.length; i++) {
//     if (arrNew[i] === item) {
//       arrNew[i] = replaceItem;
//     }
//   }
//   console.log('replaced', arrNew);
//   console.log(arr)
//   return arrNew;
// }
// replaceItemsClear([1, 2, 3, 4, 2, 1, 3], 2, 'z');

// const arr = [1,2,3,4,2];
// console.log(arr, 'f')
// function replaceItemsMutate(arr, item, replaceItem) {
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       arr[i] = replaceItem; 
//     }
//   }
//   return arr;
// }

// replaceItemsMutate(arr, 2, 'z')

// Напишите две функции replaceItemsClear(arr, item, replaceItem)
//  и replaceItemsMutate(arr, item, replaceItem).

// Функция replaceItemsClear находит все элементы
//  массива arr, равные item, и возвращает новый массив, в
// котором на месте найденных значений стоит replaceItem.

// Функция replaceItemsMutate реализует тот же
//  функционал, только мутирует входящий массив и возвращает его же.


// //////////////////////////////////////////////////////////////
// Задача -3
// function findAllIdx(arr, value) {
//   let arrNew = [];
  
//   // arrNew = arr.indexOf(value);
  
//   // console.log(arrNew);
//   for (let i = 0; i < arr.length; i++) {
//     // console.log(arr[i] === value)
//     if (arr[i] === value) {
//       arrNew.push(i); 
//     }
//   }
//   console.log(arrNew)
//   // console.log(arr.indexOf(value))
// }

// findAllIdx([1], 0);


// const areBracketsBalanced = (str) => {
//     // console.log(str.match(/\(/gm).length);
//     // console.log(str.match(/\(/gm));
//     // console.log(str.match(/\)/gm).length);
//     // console.log(str.match(/\)/gm));
//     // console.log(str.match(/\)\(/gm));
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//       if (str[i] === '(') {
//       count++; 
//       console.log(count);
//       } else if (str[i] === ')') {
//       count--;
//       console.log(count);
//       }
//       if (count < 0) {
//       return false; 
//       }
//   }
    
//   if (count === 0) {
//     return true; 
//   } else {
//   return false; 
//   }
//   // return str === '' 
//         // || str[i] === ")" && str[i+1] === '(' 
//         // || str.match(/\(/gm).length === str.match(/\)/gm).length);
// } 

//     // console.log(str.match(/\(/gm).length === str.match(/\)/gm).length)
//   // // for (let i = 0; i < str.length; i++) {
   
//   // // || str !== (/\.+\)\(.+/gm)
//   // || 
//   // // || str !== (/^\(+$/gm) 
//   // // || str !== (/^\)+$/gm)  
  
//   // // str.match(/\)\(/gm);
//   // // }
//   // // for (let i = 0; i < str.length; i++) {
//   // //   // if (str[i] === '(' && str[i + 1] === ')') {
//   // //   //   return true;
//   // //   // } else {
//   // //   //   return false;  
//   // //   // }
    
//   // // }


// areBracketsBalanced('((');

// const arithmetic = (a, b, operator) => {
//   switch (operator) {
//     case 'add' : return (a + b);
//     break;
//     case 'subtract' : return (a - b);
//     break;
//     case 'divide' : return (a / b);
//     break;
//     case 'multiply' : return (a * b);
//     break;
//     default:
//     return NaN;
//   }
// };

// arithmetic(5.1, 2, "multiply");

// function fizzbuzz(number) {
// "add", "subtract", "divide", "multiply". 
//   if (number % 3 === 0 && number % 5 === 0) {
//     return "FizzBuzz"; 
//   } else if (number % 5 === 0) {
//     return "Buzz"; 
//   } else if (number % 3 === 0) {
//     return "Fizz"; 
//   } else {
//     return number; 
//   }
// }

// fizzbuzz(22)


// fizzbuzz
// Напишите функцию, которая принимает число.
// Если число кратно 3, функция должна возвращать строку «Fizz».
// Если кратно 5, функция должна возвращать строку «Buzz».
// Если кратно и 3 и 5 - строку «FizzBuzz». В остальных случаях функция должна вернуть переданное число.



// function finalGrade(exam, projects) {
    
//     if (exam > 90 || projects > 10) {
//       exam = 100; 
//     } else if (exam > 75 && projects >= 5) {
//       exam = 90; 
//     } else if (exam > 50 && projects >= 2) {
//       exam = 75; 
//     } else {
//       exam = 0; 
//     }
  
//   return exam;
// }

// finalGrade(85, 4);


// exam — оценка за экзамен, число от 0 до 100; projects — количество проектов, число от 0 и выше. Функция возвращает: число (итоговую оценку).

// Есть четыре возможных итоговых оценки:

// 100, если оценка за экзамен выше 90 или есть больше 10 проектов
// 90, если оценка за экзамен выше 75 и есть как минимум 5 проектов
// 75, если оценка за экзамен выше 50 и есть как минимум 2 проекта
// 0 в любом другом случае
// Вот как должна работать ваша функция:




// const lettersCount = (str) => {
//   str = str.toLowerCase();
//   let obj = { };

//   for (let i = 0; i < str.length; i++) {
//     // console.log(str[i])
//     obj[str[i]] = 1;
//     // console.log(obj);
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//     obj[str[i]]++;   
//     // console.log(obj);
//     }
    
//   }
  
//   return obj;
// };

// lettersCount('aAAbbccde');




// /*function wrapInParagraph(str){
//   str = str.match(/.+($)|.+(\n)/gm);  
//   // str = str.replace(/.+($)|.+(\n)/gm, ` <p>${ str }</p> `);
//   // str = str.replace(/.+($)|.+(\n)/gm, ` \<\p\>\${ str }\</p>` )
//   for (let i = 0; i < str.length; i++) {
//   let strZam = `
//   <p>${ str[i] }</p>
//   `;
  
//   str[i] = str[i].replace(/.+($)|.+(\n)/gm, strZam);
//   console.log(str[i])  
//   }  
//   console.log(str);
//   // str = str.join();
//   // str = str.replace(/,/g, '\n');
//   // document.body.innerHTML = str;
//   // return str;
// }




// function wrapInParagraph(str){
//   str = str.match(/.+($)|.+(\n)/gm);  
//   // str = str.replace(/.+($)|.+(\n)/gm, ` <p>${ str }</p> `);
//   console.log("1", str)
//   for (let i = 0; i < str.length; i++) {
//   str[i] = str[i].replace(/.+($)|.+(\n)/gm, ` <p>${ str[i] }</p> `);
//   console.log("i", i, str[i]);
//   // console.log(str[i])  
//   }  
//   str = str.join();
//   console.log("2", str)
//   str = str.replace(/(\<\/p>)(\s)\,/gm, "$1");
//   str = str.replace(/(\<\/p>)(\s)$/gm, "$1");
//   str= str.replace(/\s/gm, '\n');
  
//   return str;
// }

// wrapInParagraph(`Some\nsimple multiline\ntext`);

// // console.log(`<p>dssdc</p>`)








// const text = `Some
// simple multiline
// text`;

// console.log(wrapInParagraph(text)); // <p>Some</p>
// // <p>simple multiline</p>
// // <p>text</p>

// const text2 = 'some\ntext';

// console.log(wrapInParagraph(text2)); // <p>some</p>
// // <p>text</p>






// const reverseLongWords = (str) => {
// let arrayNew = str.match(/\b\w+/g);

//   for (let i = 0; i < arrayNew.length; i++) {
//     if (arrayNew[i].length > 5) {
      
//       // let arrayNewQ = arrayNew[i].match(/\b\w+/g);
//       // arrayNew[i] = arrayNew[i].split('').reverse('').join('');
//       str = str.replace(arrayNew[i], nina => arrayNew[i].split('').reverse('').join(''));
//     }
    
//       // console.log((arrayNew[i].split()).reverse());
      
      
//     //   for (let j = 0; j < arrayNewQ.length; j++) {
//     //   //   console.log(arrayNew[i[j]])
//     //   }
//     // } else {
//       // console.log('Это меньше 5: ' + arrayNew[i]);
//   //   }
//   //   arrayNew1 = arrayNew[i];
//   //   console.log(arrayNew1.length);
//   //   if (arrayNew1.length > 5) {
//   //     let arrayNew2 = arrayNew1.match(/\b\w+/g);
//   //       for (let j = arrayNew2.length; j < 0; j--) {
//   //                 console.log('fd')
//   //       }
//   //   } else {}
//   }
// return str;
// }; 


// reverseLongWords('polls dickerson');
