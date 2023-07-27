let fDo = parseInt(prompt('Results for first round, Dolfins: '))
let fKo = parseInt(prompt('Results for first round, Koalas: '))
let sDo = parseInt(prompt('Results for second round, Dolfins: '))
let sKo = parseInt(prompt('Results for second round, Koalas: '))
let tDo = parseInt(prompt('Results for third round, Dolfins: '))
let tKo = parseInt(prompt('Results for third round, Koalas: '))

let avrDol = ((fDo + sDo + tDo) / 3).toFixed(2);
let avrKoa = ((fKo + sKo + tKo) / 3).toFixed(2);
console.log(avrDol, avrKoa)

if (avrDol >= 100 || avrKoa >= 100) {
    if (avrDol > avrKoa) {
        console.log('Team Dolphins wins. 🏆');
    } else if (avrDol === avrKoa) {
        console.log("Tie. 😵");
    } else {
        console.log("Team Koalas wins. 🏆");
    }
} else if (avrDol === avrKoa) {
    console.log("Tie. 😵");
} else {
    console.log('no winner. ❌')
}