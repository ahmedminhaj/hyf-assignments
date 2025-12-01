
for(let i = 1; i <= 20; i++) {
    (i % 2 === 0)
        ? console.log(`${i} is even`) 
        : console.log(`${i} is odd`);
}

function findOddEvenNumber(number) {
    const result = (number % 2 === 0) 
        ? `your input number ${number} is a even` 
        : `your input number ${number} is a odd` 
    
    return result;
}

console.log(findOddEvenNumber(42));

function findTheFibonacciSequence(number) {
    const sequence = [0, 1];
    
    while ( sequence[sequence.length - 2] + sequence[sequence.length - 1] <= number) {
        const sum = sequence[sequence.length - 2] + sequence[sequence.length - 1] // sum = 2 + 3
        sequence.push(sum); //[0, 1, 1, 2, 3]
    } 

    return sequence;
}

console.log(findTheFibonacciSequence(1));

function getCount(str) {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str.toLowerCase()) {
        if (vowel.includes(char)) count++;
    }

    return count;
}

let num = getCount('abracadabra')
console.log(num)

function squareDigit(num){
    let concatenateNumber = '';

    for( let digit of num.toString()){
        concatenateNumber += digit * digit;
    }
    return Number(concatenateNumber);
}

console.log(squareDigit(9119));

function highAndLow(numbers){
    const nums = numbers.split(" ").map(Number);
    const highest = Math.max(...nums);
    const lowest = Math.min(...nums);
    return `${highest} ${lowest}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));