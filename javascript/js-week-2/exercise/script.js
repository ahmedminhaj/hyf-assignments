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