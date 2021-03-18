// const arr = [1,2,3,4];
// arr.push(300); // even though arr is declared with `const` we can still push new values into it 
// console.log(arr);


// const arr = Object.freeze([1,2,3,4]);
// arr.push(300); // we're no longer allowed to change `arr`




const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
  ]);
  
//   const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

const needThyme = groceryList.concat( [ { "item": "thyme", "haveIngredient": false } ] );
const gotTheThyme = [ ...needThyme.slice(0, 5), { ...needThyme[5], "haveIngredient": true } ];

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
console.log(needThyme);
console.log(gotTheThyme);
console.log(notNeceCelery);

const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);
// items.sort(); // this will throw an error 
console.log(items);
const sortedItems = [...items].sort();
console.log(sortedItems);

const numbers = [10, 5, 3, 12, 22, 8];
numbers.sort(function(a, b){return b-a}); // sorts numbers in ascending order
console.log(numbers);
numbers.sort(function(a, b){return a-b}); // sortd numbers in decending order

 console.log(numbers);

 const sortedGroceries = [...groceryList].sort( (a, b) => a.item > b.item );
 console.log(sortedGroceries);