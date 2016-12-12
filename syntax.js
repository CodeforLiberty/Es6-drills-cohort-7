const arr = [11, 12, 23, 35, 58, 93];
const toFind = 35;

for (var i=0; i<arr.length; i++) {
    let item = arr[i];
    if (item === toFind) {
        break;
    }
};

console.log('Found item at position', i);

arr.push(arr[arr.length - 1] + arr[arr.length - 2]);





//Rewrite the following code to use arrow functions and default arguments:

var createArray= (items=10) => {
    items = items || 10;
    let arr = [];
    for (let i=0; i<items; i++) {
        arr.push(i);
    }
    return arr;
}

let arr = createArray();

arr = arr.filter((item) =>  item < 40
);

arr = arr.map((item) =>  item * 2
);

arr.forEach((item, index) => {
    console.log('Index:', index);
    console.log('Item:', item);
});