// regex es una mejora interesante para capturar en grupos, valores que estan dentro de una exprecion regular.

const regex = /(\d{4})-(\d{2})-(\d{2})/; 
//para este caso un manejo de fechas 

const matchers = regex.exec('2022-01-01');
console.table(matchers);
