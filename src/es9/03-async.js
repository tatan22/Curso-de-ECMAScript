async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}
const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
other.next().then(Response => console.log(Response.value));
console.log('Hello');

// que pasa si quito el await
async function* anotherGenerator1(){
    yield  Promise.resolve(1);
    yield  Promise.resolve(2);
    yield  Promise.resolve(3);
}
const other1 = anotherGenerator1();
other1.next().then(Response => console.log(Response.value));
other1.next().then(Response => console.log(Response.value));
other1.next().then(Response => console.log(Response.value));
console.log('Hello');
// => Aqui si borramos el await, nos salta un error en la sintaxis then.

async function arrayOfNamea(array) {
    for await (let value of array){
        console.log(value)};
}

const names = arrayOfNamea(['Oscar', 'David', 'Ana ']);
console.log('After');