//task 1

let password = 'Bublik';
let answer = prompt ('Введите пароль');

if (password === answer) {
    alert('Пароль введен верно');
    
} 
else {
    alert('Пароль введен неверно');
}

//task 2 

let c = prompt ('Введите число');
if (c >= 0 && c <= 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task 3

let e = 300
let d = 2
if (e > 100 || d > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

//task 4

let x = 2;
let y = 3;
alert(Number(x) + Number(y));

//task 5

let monthNumber = Number(prompt('Введите номер месяца'));
switch (monthNumber) {
    case (1):
    case (2): 
    case (12):
        console.log('Зима');
        break;
    case (3):
    case (4):
    case (5):
        console.log('Весна');
        break;
    case (6):
    case (7):
    case (8):
        console.log('Лето');
        break;
    case (9):
    case (10):
    case (11):
        console.log('Осень');
        break;
    
    default:
        console.log('это не месяц ;)');
        break;
}

// task 7

let n = Number(prompt('Введите число'))
let m = n % 2
if (!isNaN(m)) {
    if (m === 0) {
        console.log('число четное'); 
    } else {
        console.log('число нечетное');  
    }  
    
} else {
    console.log('это не число');
} 

// task 8

let clientOS = 1
if (clientOS === 1) {
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientOS === 0) {
    console.log('Установите версию приложения для iOS по ссылке');
}
else {
    console.log('Ваш телефон не поддерживает приложение');
}

// task 9

let clientOs = 1
let clientDeviceYear = 2014

switch (true) {
    case (clientDeviceYear >= 2015):
        if (clientOs === 1) {
            console.log('Установите версию приложения для Android по ссылке');
        } else if (clientOs === 0) {
            console.log('Установите версию приложения для iOS по ссылке');
        }
        else {
            console.log('Ваш телефон не поддерживает приложение');
        }
        break;

    default:
        if (clientOs === 1) {
            console.log('Установите облегченную версию приложения для Android по ссылке');
        } else if (clientOs === 0) {
            console.log('Установите облегченную версию приложения для iOS по ссылке');
        }
        else {
            console.log('Ваш телефон не поддерживает приложение');
        }
        break;
}



