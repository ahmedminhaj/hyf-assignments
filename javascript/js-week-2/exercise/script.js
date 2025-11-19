// Flight Booking
// Show full name on the ticket
console.log("----Flight Booking----")
const getFullName = (firstName, lastName, useFormalName = false) => {
    let fullName = firstName + ' ' + lastName;
    return useFormalName ? `Lord ${fullName}` : fullName;
}

console.log(getFullName("Benjamin", "Hughes", true))
console.log(getFullName("Hughes", "Jack"))

/*
for woman, we can take a new param genderRole it could be boolean/string which will let us know about the person's gender role 
with the value of genderRole we can change the title for woman in formal name
*/

//Event Date
console.log("----Find event Day----")
const getEventWeekDay = (remainingDay) => {
    const dayNames = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    
    const todayDate = new Date();
    const todayInNumber = todayDate.getDay(); // get the day in 0-6 
    const eventDayInNumber = todayInNumber + remainingDay % 7; 
    const eventWeekDay = dayNames[eventDayInNumber % 6]; 
    return eventWeekDay;
}
console.log(`Event is ${getEventWeekDay(11)}`);

// Weather wear 
console.log('----Weather wear----');
const getOutfitBasedOnWeather = (temperature) => {
    if (temperature >= 30) {
        return "T-shirt, shorts.";
    } 
    else if (temperature >= 20 && temperature < 30) {
        return "Shirt, light jeans.";
    } 
    else if (temperature >= 10 && temperature < 20) {
        return "Long sleeve shirt or light sweater and jeans.";
    } 
    else if (temperature >= 0 && temperature < 10) {
        return "Warm jacket, sweater.";
    } 
    else {
        return "Heavy coat, gloves, scarf.";
    } 
}

const clothsToWear = getOutfitBasedOnWeather(-1);
console.log(clothsToWear);

