const object = {a: 1, b: 2 , c: 3};

for (const [key, value] of Object.entries(object)) {
    console.log(`${key}: ${value}`);
}

//2

var myCar = new Object();
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;

function showProps(obj, objName) {
    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
    }
    return result;
}

//3

let user = new Map([
    ["first", "Привет"],
    ["second", "Как"],
    ["third", "Делишки?"]
]);
console.log(user)



//4

function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
        if (value === searchValue)
            return key;
    }
}

let user2 = new Map();
user2.set(1, 'Ну так');
user2.set('2', 'Как');
user2.set('3', 'Дела?');

console.log(getByValue(user2, 'Ну так'));
console.log(getByValue(user2, 'Дела?'));
console.log(getByValue(user2, 'Как'));




//2 вариант


let user3 = new Map([
    ["ОЛАДЬИ", 1],
    ["оладьИ", 2],
    ["олАдьИИ", 3]
]);

// перебор по ключам (овощи)
for (let vegetable of user3.keys()) {
    alert(vegetable); // огурец, помидор, лук
}


//5


let set = new Set();

let first = { name: "" };
let second = { name: "" };
let third = { name: "" };

set.add(1);
set.add(2);
set.add(3);


//6


const set1 = new Set([1, 2, 3]);

console.log(set1.has(3));
console.log(set1.has(4));


//7(не оч понял)
let user4 = ["КУ", "ПРИВЕТ", "ЗДАРОВА"];

let set2 = user4
console.log(set2)

//8

let week = new Map([
    ["Понедельник", "Monday"],
    ["Вторник", "Tuesday"],
    ["Среда", "Wednesday?"]
        ["Четверг" , "Thursday"],
    ["Пятница", "Friday"],
    ["Суббота", "Saturday?"]
        ["Воскресенье", "Sunday"]
]);








