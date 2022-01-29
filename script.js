"use strict";

let plannedYear = Number(prompt("At what age do you plan to retire?"));
let currentAge = Number(prompt("How many years old are you now?"));
let yearsLeft = plannedYear - currentAge;

if (yearsLeft < 0) {
  yearsLeft = yearsLeft * -1;
  console.log(`You have crossed the planned age by ${yearsLeft} years!`);
} else {
  console.log(`You should retire in ${yearsLeft} years!`);
}
