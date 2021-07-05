
function arrayToCsv(data) {

    data.forEach(el => {
        el.forEach(element => {
            // console.log(typeof element !== "number" && typeof element !== "string")
            if (typeof element !== "number" && typeof element !== "string") {
                throw new Error("Unexpected value");
            }
        });
    });
    let O = JSON.stringify(data);
    console.log(O)
    O = O.replace(/],\[/gm, '\n');

    if (O.match(/"\w"/gm)) {
        O = O.replace(/"/gm, '');
    } else if (O.match(/"\\"/gm)) {
        O = O.replace(/\\/gm, '\"');
    }

    O = O.replace(/]\]/gm, '');
    O = O.replace(/\[\[/gm, '');
    // console.log(O)
    return String(O);

}
// console.log(arrayToCsv([[1,2], [3,4], ["a","b"]]));
// console.log(arrayToCsv([["1,2,3", "4,5"], [",,,,", 1]])) // '"1,2,3","4,5"\n",,,,",1'
console.log(arrayToCsv([['"text"', 'other "long" text']]));