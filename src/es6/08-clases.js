// Como se declara una clase

class User{};

// Como hacer una instancia de esta misma.

const newUser = new User();

// --------------- Crear clase con nuevo metodos 
class user {
    // Declaramos los metodo de esta mismo 
    greeting() {
        return 'Hello'
    }
};

// instancia y llamado este metodo 
const gndx = new user();
// Uso del meto que esta alli
console.log(gndx.greeting());


// Tenemos un constructor 

class user {
    // constructor 
    constructor(){
        console.log('Nuevo Usuario');
    }
    greeting() {
        return 'Hello'
    }
}

const David = new user();

// this: Hace referencia al elemneto padre que lo contiene.

class user {
    constructor(name) {
        this.name = name; 
    }
    // Metodo
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user('Ana');
console.log(ana.greeting());

//-----------------------setter and getters

class user {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // Metodo 
    speak(){
        return 'Helo';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const bebeloper = new user ('David', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge =20);