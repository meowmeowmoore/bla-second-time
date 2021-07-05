

let fileSizes = {
    testFile1: 65,
    testFile2: 48,
}

function getFileSize(filename, cb) {
    setTimeout(() => cb(fileSizes[filename]), 2000);

}

function sumFileSizes(filename1, filename2, cb) {
    let num1 = 0;
    getFileSize(filename1, a => num1 += a);
    getFileSize(filename2, a => num1 += a);
    setTimeout(() => cb(num1), 2000);
}



sumFileSizes("testFile1", 'testFile2', () => a => console.log(a))



// let a = (c) => console.log(c);
// let b = a;
// b(5);