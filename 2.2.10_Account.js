class Person {
    constructor(firstName, lastName, date) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.date = date;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    };

    getAge() {
        return Math.floor((Date.parse("2019-05-23") - Date.parse(this.date)) / (24 * 3600 * 365.25 * 1000));
    }
}

let petya = new Person("Petya", "Petrucho", "1990-05-25");
let olya = new Person("Olya", "Olyovski", "1995-01-10");

// class AccountHistory {
//     constructor (timestamp, target, amount, description) {
//         this.amount = amount
//         this.description = description;
//         this.target = target;
//         this.timestamp = timestamp;
//     }
// }


class Account {

    constructor(person, money) {
        this.accHistory = [];
        this.person = person;
        this.money = money;
    }

    addMoney(amount, description) {
        let d = {
            "amount":  amount,
            "description": description,
            "target": "in",
            "timestamp": Date.now(),
        }
        this.accHistory.push(d);
        this.money += amount;
    }

    withdrawMoney(amount, description) {
        let d = {
            "amount":  amount,
            "description": description,
            "target": "out",
            "timestamp": Date.now(),
        }
        this.accHistory.push(new Object(d));
        this.money -= amount;
    }

    getAmount() {
        console.log(this.person, 'HERE')
        return this.money;
    }

    getAccountHistory() {
        return this.accHistory;
    }

    static transfer(fromAccount, toAccount, amount) {
        //
        // console.log(fromAccount, 'ПЕРЕВОДЯЩИЙ БАБКИ')
        // console.log(toAccount, 'ПРИНИМАЮЩИЙ БАБКИ')
        toAccount.addMoney(amount, 'перевод');
        fromAccount.withdrawMoney(amount, 'перевод');
    }
}

let petyaAccount = new Account(petya, 2000);
let olyaAccount = new Account(olya, 1000);

console.log(petyaAccount.getAmount(), 'БАБКИ ПЕТЬКИ ВНАЧАЛЕ');
console.log(petyaAccount.addMoney(1000, 'Зарплата'), 'ПРИШЛА ПЕТЬКЕ ЗП');
console.log(petyaAccount.withdrawMoney(200, 'Покупка'), 'КУПИЛ ПЕТЬКА ТЕЛЕК');
console.log(petyaAccount.getAmount(), 'ПЕТЬКА РЕШИЛ ПРОВЕРИТЬ БАБКИ');
console.log(Account.transfer(petyaAccount, olyaAccount, 123 ), "ПЕРЕВЕЛ БАБКИ ОЛЬКЕ");
console.log(petyaAccount.getAmount(), 'ПРОВЕРИЛ ОПЯТЬ БАБКИ');
// console.log(petyaAccount.withdrawMoney(100, 'Налоги'));
console.log(olyaAccount.getAccountHistory(), 'ОЛЯ РЕШИЛА ПРОВЕРИТЬ ИСТОРИЮ ПЕРЕВОДОВ');
console.log(petyaAccount.getAccountHistory(), 'ПРОВЕРИТЬ ИСТОРИЮ ПЕРЕВОДОВ');