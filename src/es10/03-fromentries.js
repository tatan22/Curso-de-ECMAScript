// object.entries acambio de convertir un objeto en un arrays de arrays, podemos hacer un cambio inverzo.
const entries = new Map([['name', 'Oscar'],['age', 34]]);

console.log(entries);
console.log(Object.fromEntries(entries));