// Variables

//Global
    var lastName = 'David';
    lastName = 'Oscar';
    console.log(lastName);

// Bloque
    
    let fruit = 'Apple';
    fruit = 'kiwi';
    console.log(fruit);

    const animal = 'Dog';
    animal = 'Cat';
    console.log(animal);

    const fruits =() =>{
        if (true){
            var fruit1 = 'Apple'; // Funcion scope 'Global'
            let fruit2 = 'kiwi'; // Block scope 'bloque'
            const fruit3 = 'Banana'; // Block scope 'bloque'
        }
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
    fruits();
