// include nos permite trabajar dentro de un array y ver si alli hay un elemento 
let numbers =[1, 3, 4, 6, 7, 8];

console.log(numbers.includes(4)); //true 
console.log(numbers.includes(9));// false

const list = ['Oscar', 'David','Ana'];
console.log(list.includes('Ana'));

// Caso de capitalizacio, identificar mayusculas o minusculas.
// para este caso no distingue entre mayusculas y minusculas 
console.log(list.includes('ana'));// false