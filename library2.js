
function Book(name, author, year) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.reader = null;
}

let pop = 2;
Book.prototype.isAvaliable = function () {
    return this.reader === null;
}

Book.prototype.takeBook = function (readerName) {
    if (this.reader === null) {
        this.reader = readerName;
        return true;
    } else {
        return false;
    }
};

Book.prototype.returnBook = function () {
    if (this.reader !== null) {
        this.reader = null;
        return true;
    } else {
        return false;
    }
}

Book.prototype.changeBookName = function (newBookName) {
    if (this.reader === null) {
        this.name = newBookName;
        return true;
    } else {
        return false;
    }
};

Book.prototype.changeAuthorName = function (newAuthorName) {
    if (this.reader === null) {
        this.author = newAuthorName;
        return true;
    } else {
        return false;
    }
}

Book.prototype.getCurrentReader = function () {
    return this.reader;
};


let hooyuk = new Book("testName", "testAuthor", "2020");
console.log(hooyuk.author);
console.log(hooyuk.reader);
console.log(hooyuk.isAvaliable());
console.log(hooyuk.takeBook('Petya'));
// console.log(Book.prototype);
// console.log(hooyuk.isAvaliable('Petya'));
// console.log(hooyuk.changeBookName('ssssssssssssssssssssssss'));
// console.log(hooyuk.returnBook());
// console.log(hooyuk.changeBookName('ssssssssssssssssssssssss'));
//
// function User (name) {
//     this.name = name;
//     this.isAdmin = function () {
//         return !(name === null);
//     }
// }
//
// let user = new User("PPPPPP");
// console.log(user.isAdmin())

function Book2() {
    this.book = new Book("a", "b", "c");
    this.name = "name";
    this.author = this.book.author;
    this.year = "year";
    this.reader = null;
}


Book2.prototype.isAvaliable = function () {
    return this.reader === null;
}

Book2.prototype.takeBook2 = function (readerName) {
       if (this.reader === null) {
           this.reader = readerName;
           return true;
       } else {
           return false;
       }
    };

Book2.prototype.returnBook2 = function () {
        if (this.reader !== null) {
            this.reader = null;
            return true;
        } else {
            return false;
        }
    }

Book2.prototype.changeBook2Name = function (newBook2Name) {
        if (this.reader === null) {
            this.name = newBook2Name;
            return true;
        } else {
            return false;
        }
    };

Book2.prototype.changeAuthorName = function (newAuthorName) {
        if (this.reader === null) {
            this.author = newAuthorName;
            return true;
        } else {
            return false;
        }
    }

Book2.prototype.getCurrentReader = function () {
    return this.reader;
};

let hooyuk2 = new Book2();
console.log(pop)
console.log(hooyuk2.author);
console.log(hooyuk.reader);
console.log(hooyuk.isAvaliable());
console.log(hooyuk.takeBook('Petya'));
// console.log(Book2.prototype);
// console.log(hooyuk.isAvaliable('Petya'));
// console.log(hooyuk.changeBook2Name('ssssssssssssssssssssssss'));
// console.log(hooyuk.returnBook2());
// console.log(hooyuk.changeBook2Name('ssssssssssssssssssssssss'));
//
// function User (name) {
//     this.name = name;
//     this.isAdmin = function () {
//         return !(name === null);
//     }
// }
//
// let user = new User("PPPPPP");
// console.log(user.isAdmin())