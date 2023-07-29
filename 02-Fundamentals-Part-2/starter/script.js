'use strict';


// function juice(apples, bananas) {
//     const choice = `we will add ${apples} apples and ${bananas} bananas to the mix`;
//     return choice;
// }

// let a = prompt('how many apples you want?')
// let b = prompt('how many bananas you want?')
// console.log(juice(a, b));

// function describeCountry(c, p, cap) {
//     let info = (`${c} has ${p} million people and its capital city is ${cap}`);
//     return info;
// }

// let nameC = prompt("what's your country name?");
// let popu = prompt("how many population?");
// let capi = prompt("what is the capital of your country?")
// console.log(describeCountry(nameC, popu, capi))

function ageCalc(age) {
    let gage = 2023 - age;
    return gage;
}

let givenAge = prompt("What year were you born in?");
console.log(`you are ${ageCalc(givenAge)} years old.`);