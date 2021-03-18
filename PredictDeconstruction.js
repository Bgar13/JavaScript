console.log("*****Problem 1*****");
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

//My prediction
//Tesla
//Mercedes

//Actual outcome
// Problem 1
// Tesla
// Mercedes

// console.log("*****Problem 2*****");
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name);
// console.log(otherName);

//My prediction
//ERROR NOT SURE WHAT ERROR NAME BUT BECAUSE "NAME" IS NOT DEFINED

//OUTCOME
//ReferenceError: name is not defined

console.log("******Problem 3******");
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

//My prediction
// 12345
// undifiend

//OUTCOME
// 12345
// undefined


console.log("*******Problem 4******");
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

//My prediction
//false because 2 is not equal to 5
//true because 2 is equal to 2
//OUTCOME
//false
//true

console.log("*******Problem 5******");
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

//My prediction
//value
//[1,5,1,8,3,3]
//[1]
//5

//OUTCOME
// value
// [ 1, 5, 1, 8, 3, 3 ]
// 1
// 5

