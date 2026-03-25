const functionsArray = [
  () => console.log('I am function 1'),
  () => console.log('I am function 2'),
  () => console.log('I am function 3'),
];
 
functionsArray.forEach(fn => fn());

function funcDeclaration() {
  console.log('Hello from a function declaration!');
}

const funcExpression = () => console.log('Goodbye from a function expression!');
 
funcDeclaration();
funcExpression();
 
const person = {
  name: 'Alice',
  greet: () => {
    console.log('Hi, my name is ' + person.name);
  },
};
 
person.greet();