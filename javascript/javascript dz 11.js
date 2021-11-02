var years = prompt('Сколько вам лет?', 25);

alert('Вам ' + years + ' лет!(удивлен?)')

let num6=3;
let str='';

console.log(Boolean(num6));
console.log(Boolean(str));




var num1 = parseInt(prompt('Ввести первое число', 25));
var num2 = parseInt(prompt('Ввести второе число', 25));
var c=num1+num2;

alert(c);

var num3 = parseInt(prompt('Ввести первое число для деления', 25));
var num4 = parseInt(prompt('Ввести второе число для деления', 25));
var m=num3%num4

alert('Остаток от деления=' + m);


let a = 10, b = 20;

( ++a ); //  префиксная форма возвращает новое значение
( b++ ); //  постфиксная форма возвращает старое значение

( a ); //  значение увеличено один раз
( b ); //  значение увеличено один раз


function check(num) {
    return  parseInt(num)&1 ?  "нечётное" : "чётное" ;
}
const n = prompt("Введите целое число.");
alert(check(n));


console.log( 1 == '1' );
console.log(1>'1');

console.log( 0==false );
console.log( 0>false );

function checkType(arg){
    console.log(typeof arg)
}

checkType(11);
checkType('Hello');
checkType({a:1});
checkType(null);
checkType(false);




let booksCount = prompt('Введите число книг(условие меняется от 15 книг)');
let result;


if (booksCount > 15) {
    result = 'Красавчик';
} else {
    result= 'Че так мало?';
}
alert(result)


let password = prompt('Введите пароль(19532)');
let result1;


if (password&19532) {
    result1 = 'ОТКУДА ТЫ УЗНАЛ ПАРОЛЬ???';
} else {
    result1= 'Чел я же написал пароль';
}
alert(result1)


let str1='30';


console.log(!Boolean(str1))



