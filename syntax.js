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


//Use Object.assign to merge these three objects into a single new object. Then use object destructuring to split them out into separate variables. Finally use the enhanced object literal syntax to merge the variables back into three more objects which are identical to the originals.

const obj1 = {
    foo: 'bar',
    zip: 'zap'
};

const obj2 = {
    alice: 'sender',
    bob: 'receiver',
    eve: 'eavesdropper'
};

const obj3 = {
    satya: 'microsoft',
    tim: 'apple',
    marissa: 'yahoo',
    sundar: 'google',
    mark: 'facebook'
}

const obj4 = Object.assign({}, obj1, obj2, obj3); //we make an object with the three from earlier

console.log(obj4); //check what the object is

const {foo,zip} = obj4; //assign the constants foo and zip to obj4 foo and zip propertys
console.log({foo,zip});
const {alice,bob,eve} = obj4;

const {satya,tim,marissa,sundar,mark} = obj4;

const ObjectOne = {foo,zip}; //We make an object with the property and values of foo and zip
console.log(ObjectOne);

const Objecttwo = {alice,bob,eve};

const Objectthree = {satya,tim,marissa,sundar,mark};



//Rewrite the following code to use the array spread operator:

function rectToCorners(x, y, width, height) {
    const topLeft = [x, y];
    const topRight = [x + width, y];
    const bottomLeft = [x, y + height];
    const bottomRight = [x + width, y + height];
    return [].concat(topLeft, topRight, bottomLeft, bottomRight);
};

const position = [10, 20];
const size = [5, 5];

rectToCorners(...position,...size);