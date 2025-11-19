// exercise 1
const age = 27;

if ( age <= 2) {
    console.log("Free ride");
} else if (age >= 3 && age <= 18) {
    console.log("get 15% discount");
} else if ( age >= 19 && age <= 26) {
    console.log("get 10% discount");
} else if (age > 60) {
    console.log("get 70% discount");
} else if (age < 0) {
    console.log("you are from different planet");
} else {
    console.log("no discount");
}

// exercise 2
const a = 1;
const b = 2;

const result = a + b < 4 ? "below" : "over";

console.log(`Sum of ${a}, ${b} is ${result} of 4.`);

// exercise 3
for( let i = 10; i >= 0; i--) {
    if ( i === 10) {
        console.log("OMG it started");
    } else if (i === 0) {
        console.log("Happy New Year!");
    } else {
        console.log(i)
    }
}

console.log("countdown with while");
let i = 10;
while( i >= 0) {
    if ( i === 10) {
        console.log("OMG it started");
    } else if (i === 0) {
        console.log("Happy New Year!");
    } else {
        console.log(i)
    }
    i--;
}

console.log("do while")
i = 10;
do {
    // console.log(i)
    if ( i === 10) {
        console.log("OMG it started");
    } else if (i === 0) {
        console.log("Happy New Year!");
    } else {
        console.log(i)
    }
    i--;
}while (i >= 0)

// exercise
console.log("find minimum number");
const findMin = (a, b) =>  a < b ? a : b;

console.log(findMin(2, 5))
console.log(findMin(3, -1))
console.log(findMin(1, 1))