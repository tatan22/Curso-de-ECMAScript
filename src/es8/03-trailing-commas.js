const array = [24 , 34, 25, 24];

console.log(array);
console.log(array.length);

// Trailing commas me permite adiciona espacios o comas en un array
const array1 = [24 , 34, 25, 24, , , ,45];

console.log(array1);
console.log(array1.length);
// => [ 24, 34, 25, 24, <3 empty items>, 45 ]
// => 7