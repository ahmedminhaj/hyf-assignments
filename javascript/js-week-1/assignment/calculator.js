const yearOfBirth = 1999;
const yearFuture = 2030;

const age = 2030 - 1999;

const message = `You will be ${age} years old in ${yearFuture}.`;

console.log("_____Age-ify_____");
console.log(message);

const dogYearBirth = 2019;
const dogYearFuture = 2027;
const dogYear = 7;

const shouldShowResultInDogYears = false;

let dogAge = 2027 - 2019;
dogAge = dogAge * (shouldShowResultInDogYears ? dogYear : 1);

const dogMessage = `Your dog will be ${dogAge} ${shouldShowResultInDogYears ? "dog" : "human"} years old in ${dogYearFuture}`;

console.log("_____GoodBoy-OldBoy_______");
console.log(dogMessage);

