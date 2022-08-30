const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { error } = require('node:console');
const rl = readline.createInterface({ input, output });


let num = Math.floor(Math.random() * 1000);
console.log(num);


function getCount(start) {
    let counter = start;
    return function (sw) {
        switch (sw) {
            case '+':
                counter++
                break;
            case '-':
                counter--
                break;             
            default:
                counter
                break;
        }
        return counter;      
    }
} 

let counter1 = getCount(0);


const findNumber = () => {
    const promise = new Promise((resolve, reject) => {
        counter1("+");
        rl.question("Введите целое число от 0 до 999, для выхода - q. ПОПЫТКА № " + counter1() + ": ", answer => {
            console.log('--------------\nВы ввели', answer, '\n--------------');
            resolve (answer);
        })  
    })
    return promise;  
}


const checkError = (guessNum) => {
    if (isNaN(guessNum) && guessNum !== 'q') {
        console.log('Вы ввели не число! Попытка не засчитана!');
        counter1("-");
        return true;
    } else if (guessNum > 999 || guessNum < 0) {
        console.log('Вы ввели число за пределами предлагаемого диапазона! Попытка не засчитана!');
        counter1("-");
        return true;
    } else if (guessNum != Math.floor(guessNum) && guessNum !== 'q') {
        console.log('Вы ввели не целое число! Попытка не засчитана!');
        counter1("-");
        return true;
    } else if (guessNum - num > 0) {
        console.log('Загаданное число меньше Вашего числа, пока не угадали!');
        return true;
    } else if (guessNum - num < 0) {
        console.log('Загаданное число больше Вашего числа, пока не угадали!');
        return true;
    } else if (guessNum == 'q') {
        console.log('Заходите еще попытать счастье, пока!');
        rl.close();
    } else if (+guessNum === num) {
        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\nВы угадали! Количество попыток -', counter1(), '\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>');
        rl.close();
    }
        
}


(async () => {
    do {
        checkError(await findNumber())
    }
    while(checkError(await findNumber())) 

}) ()

