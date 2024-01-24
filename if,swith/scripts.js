// let i = 0;
// while (i<6) console.log(i++);

// do {
//     console.log(i--);
// } while (i>6);

// let i = 0
// for (; i<10;){
//     console.log(i);
//     i++
// }

// let array = [45,12,45,78,36]

// let array = {
//     'name':'Vasya',
//     'age':18,
//     'email': 'dthdbjv@kgbf.ru'
// }
// for (let i in array){
//     console.log(array[i]);
// }

// let array = {
//     'name':'Vasya',
//     'age':18,
//     'email': 'dthdbjv@kgbf.ru'
// }
// for (let i in array){
    
//     if (i =='age'){
//         continue;
//     }
//     console.log(array[i]);
// }

// first:for (let i =0; i<=10;i++){
//     for (let j=0;j<=10;j++){
//         console.log(i*j);
//         if (i ==3){
//             break first;
//         }
//     }
// }


// 1
// var a = 10; 

// if (a === 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }
// //2
// var min = 35; 

// if (min < 15) {
//     console.log('Первая четверть');
// } else if (min < 30) {
//     console.log('Вторая четверть');
// } else if (min < 45) {
//     console.log('Третья четверть');
// } else {
//     console.log('Четвертая четверть');
// }

// console.log(arr);
// //3 
// var lang = 'ru'; 
// var arr = [];

// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }

// //3 switch
// var lang = 'ru'; 
// var arr = [];

// switch (lang) {
//     case 'ru':
//         arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         break;
//     case 'en':
//         arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
//         break;
// }


// console.log(arr);
//4
// var a = 1;
// var b = 0;
// var c = -3;
// if (a === 0) console.log('Верно'); else console.log('Неверно');

// var a = 1;
// var b = 0;
// var c = -3;
// if (a > 0) console.log('Верно'); else console.log('Неверно');

// var a = 1;
// var b = 0;
// var c = -3;
// if (a < 0) console.log('Верно'); else console.log('Неверно');

// var a = 1;
// var b = 0;
// var c = -3;
// if (a >= 0) console.log('Верно'); else console.log('Неверно');

// var a = 1;
// var b = 0;
// var c = -3;
// if (a <= 0) console.log('Верно'); else console.log('Неверно');

// var a = 1;
// var b = 0;
// var c = -3;
// if (a !== 0) console.log('Верно'); else console.log('Неверно');


// if (a === 'test') console.log('Верно'); else console.log('Неверно');

// a = '1';
// b = 1
// c = 3

// if (a === '1' && typeof a === 'string') console.log('Верно'); else console.log('Неверно');
// //5
// var a = 2;

// if (a > 0 && a < 5) console.log('Верно'); else console.log('Неверно');
//6


// a = 5;
// if (a === 0 || a === 2) a += 7; else a /= 10;
// console.log(a);
//7
// a = 0;
// if (a <= 1 && b >= 3) console.log(a + b); else console.log(a - b);
// //8
// a = 3;
// b = 5;
// if (a > 2 && a < 11 || b >= 6 && b < 14) console.log('Верно'); else console.log('Неверно');
// //9
// var num = 1; 
// var result = '';

// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//     case 3:
//         result = 'лето';
//         break;
//     case 4:
//         result = 'осень';
//         break;
//     default:
//         result = 'Неверное значение';
// }
// console.log(result);
// //10
// var day = 20; 

// if (day >= 1 && day <= 10) {
//     console.log('Первая декада');
// } else if (day >= 11 && day <= 20) {
//     console.log('Вторая декада');
// } else if (day >= 21 && day <= 31) {
//     console.log('Третья декада');
// } else {
//     console.log('Неверное значение');
// }
// //11
// var month = 3; 

// if (month >= 3 && month <= 5) {
//     console.log('Весна');
// } else if (month >= 6 && month <= 8) {
//     console.log('Лето');
// } else if (month >= 9 && month <= 11) {
//     console.log('Осень');
// } else if (month === 12 || month >= 1 && month <= 2) {
//     console.log('Зима');
// } else {
//     console.log('Неверное значение');
// }
// //12
// var str = 'abcde'; 

// if (str[0] === 'a') {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// //13
// var str = '12345'; 

// if (str[0] === '1' || str[0] === '2' || str[0] === '3') {
//     console.log('да');
// } else {
//     console.log('нет');
// }
// //15
// var str = '123'; 

// var sum = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);

// console.log(sum);
// //16
// var str = '123456'; 

// var sum1 = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
// var sum2 = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);

// if (sum1 === sum2) {
//     console.log('да');
// } else {
//     console.log('нет');
// }