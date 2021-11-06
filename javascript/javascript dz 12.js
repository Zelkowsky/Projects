function func1(a, b, c) {
    console.log(arguments[0]);


    console.log(arguments[1]);


    console.log(arguments[2]);

}

func1(513, 41, 741);


function primeChecker(num1,num2) {
    if (num1 < num2) {
        return -1;
    }
    if (num2 < num1) {
        return 1;
    }
    if (num1 = num2) {
        return 0;
    }
}



let sum = (a, b) => a + b;

alert( sum(1, 2) );



let sum1 = (a, b) => a - b;

alert( sum1(5, 3) );



let sum2 = (a, b) => a * b;

alert( sum2(5, 3) );



let sum3 = (a, b) => a / b;

alert( sum3(10, 2) );




let helloFunc = (name = 'гость') => { console.log(`Здравствуйте, ${name}!`) };





function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

alert( fib(5) );
alert( fib(10) );






function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

alert( fib(12) ); // 2
alert( fib(51) ); // 13
alert( fib(1) ); // 5527939700884757