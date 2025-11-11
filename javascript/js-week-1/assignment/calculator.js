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

console.log("_____Housey-Pricey_____")
const peterHouseVolumeInM2 = 8 * 10 * 10;
const peterGardenSize = 100;
const peterRentPaid = 2500000;
const juliaHouseVolumeInM2 = 5 * 11 * 8;
const juliaGardenSize = 70;
const juliaRentPaid = 1000000;

function rentCalculate(volumeInMeters, gardenSizeInM2) {
    return volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
}

const peterEstimatedRent = rentCalculate(peterHouseVolumeInM2, peterGardenSize);
const juliaEstimatedRent = rentCalculate(juliaHouseVolumeInM2, juliaGardenSize);

function priceEstimation(name, paidRend, estimatedRent) {
    console.log(`${name} is paying  ${(paidRend > estimatedRent) ? "much" : "little"}.`) 
}

priceEstimation("Peter", peterRentPaid, peterEstimatedRent);
priceEstimation("Julia", juliaRentPaid, juliaEstimatedRent);

console.log("____EZ-Name____");

const firstWords = ["Nova", "Tech", "Pixel", "Prime", "Next", "Hyper", "Bold", "Code", "Core", "Echo"];
const secondWords = ["Nest", "Loop", "Atom", "Grid", "Vertex", "Peak", "Nexus", "Cloud", "Byte", "Motion"];

const randomNumber1 = Math.floor(Math.random() * 10);
const randomNumber2 = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];

const startupNameMessage = `The startup: ${startupName} contains ${startupName.length} characters.`
console.log(startupNameMessage);