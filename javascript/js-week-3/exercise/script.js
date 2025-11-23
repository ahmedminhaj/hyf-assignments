console.log("----exercise 1----")
const pizzaObj = {
    name: "Classic cheese",
    price: 60,
    description: "extra cheese with chicken and topping",
}

pizzaObj.ingredients = ["cheese", "chicken", "paper"];

function findTheName() {
    return console.log(`this pizza is ${this.name} and ingredients are ${this.ingredients.join(', ')}`)
}
pizzaObj.findTheName = findTheName;

pizzaObj.findTheName();

for(let [index, ingredient] of pizzaObj.ingredients.entries()) {
    console.log(index, ingredient);
}

console.log("=============================================")
console.log("----exercise 2----")
const pizzas = ['Potato pizza', 'Tomato pizza'];

function isIn(element) {
    const index = this.indexOf(element);
    return index > -1;
}

if (!Array.prototype.isIn) Array.prototype.isIn = isIn;

console.log(pizzas.isIn('Kebab pizza'));
console.log(pizzas.isIn('Tomato pizza'));

const findPizza = (pizza, pizzas) => {
    return pizzas.indexOf(pizza) < 0 ? `${pizza} is not available` : `${pizza} is available` ;
}

console.log(findPizza('Potato pizza', pizzas))
console.log(findPizza('Pineapple pizza', pizzas))

let pizzaIngredients = [...pizzaObj.ingredients, 'tomato', 'pineapple'];

const removeLeastFavoriteIngredient = (ingredient, ingredients) => {
    const indexOfIngredient = ingredients.indexOf(ingredient);
    if(indexOfIngredient > -1) ingredients.splice(indexOfIngredient, 1);
    return ingredients;
}

console.log(pizzaIngredients);
pizzaIngredients = removeLeastFavoriteIngredient('tomato', pizzaIngredients);
console.log(pizzaIngredients);

const listOfPeople = [
    {
        name: 'Jon',
        age: 27
    },
    {
        name: 'Jack',
        age: 31
    },
    {
        name: 'Daniel',
        age: 33
    }
]

const findAverageAge = (people) => {
    let sumOfAge = 0;
    for( let person of people){
        sumOfAge = sumOfAge + person.age;
    }
    return sumOfAge/people.length;
}

const averageAge = listOfPeople.reduce((sum, person) => sum + person.age, 0) / listOfPeople.length;
console.log(findAverageAge(listOfPeople))
console.log(averageAge)