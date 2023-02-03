// Creamo una funcion que hara nuestra promesaa 
const fnAsync =() => {
    return new Promise((resolve, reject)=>{
        (true)
            ?setTimeout(()=> resolve('AsynC!!'), 2000)
            : reject(new Error('Error!'));
    })
}

// Acontinuacion vamos a ejecutar la promesa 
const anotherFn = async () =>{
    const somethind = await fnAsync();
    console.log(somethind);
    console.log('Helo!');
}

console.log('Before');
anotherFn();
console.log('After');