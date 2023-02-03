// Vamos a crear un string y luego le pasaremos un metodo.
const string = 'Helo';

console.log(string.padStart(7,'hi'));// podemos agrgar y decirle donde iniciar 
// => hihHelo

console.log(string.padStart(10,'hi'));
//=>hihihiHelo

console.log(string.padStart(8,'hi'));
//=>hihiHelo

// Nos entrega un string del tama;o designado y lo faltante lo rellena con el otro parametro, para este caso al inicio.

console.log(string.padStart(6,'_'));
// => __Helo

// PadEnd hace casi exactamente lo mismo, a diferencia de que este completa el tama;o del string al final.

console.log(string.padEnd(8,'*'));
