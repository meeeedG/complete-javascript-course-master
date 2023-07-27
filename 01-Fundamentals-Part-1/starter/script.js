// let fDo = parseInt(prompt('Results for first round, Dolfins: '))
// let fKo = parseInt(prompt('Results for first round, Koalas: '))
// let sDo = parseInt(prompt('Results for second round, Dolfins: '))
// let sKo = parseInt(prompt('Results for second round, Koalas: '))
// let tDo = parseInt(prompt('Results for third round, Dolfins: '))
// let tKo = parseInt(prompt('Results for third round, Koalas: '))

// let avrDol = ((fDo + sDo + tDo) / 3).toFixed(2);
// let avrKoa = ((fKo + sKo + tKo) / 3).toFixed(2);
// console.log(avrDol, avrKoa)

// if (avrDol >= 100 || avrKoa >= 100) {
//     if (avrDol > avrKoa) {
//         console.log('Team Dolphins wins. 🏆');
//     } else if (avrDol === avrKoa) {
//         console.log("Tie. 😵");
//     } else {
//         console.log("Team Koalas wins. 🏆");
//     }
// } else if (avrDol === avrKoa) {
//     console.log("Tie. 😵");
// } else {
//     console.log('no winner. ❌')
// }
// let language = prompt('enter your language:');
// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         alert('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         alert('2nd place in number of native speakers');
//         break;
//     case 'english':
//         alert('3rd place');
//         break;
//     case 'hindi':
//         alert('Number 4');
//         break;
//     case 'arabic':
//         alert('5th most spoken language');
//         break;
//     default:
//         alert('Great language too :D');
// }

// let morocco = 33;
// let avrPopu = 33 < morocco ? 'above' : 'below';

// console.log(`morocco population is ${avrPopu} average`);

let price = 40;
let tip = price >= 50 && price <= 300 ? price * 15 / 100 : price * 20 / 100
console.log(`the bill was ${price}, the tip was ${tip}, and the total is ${price + tip}`)