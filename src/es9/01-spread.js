// Este operador ahora admite spread con objetos

const user = {username: 'gndx', age: 34, country: 'CO'};
const {username, ...values} = user;
console.log(username);
console.log(values);
// => gndx
// { age: 34, country: 'CO' } Estefue el valor asignado a values 
