class Animal {
    constructor(nombre,peso){
        this.nombre = nombre
        this.peso = peso
    }

    getNombre(){
        return this.nombre
    }

    comer(comida){
        return `${this.nombre} se encuentra comiendo ${comida}`
    }
}


//extends es para heredar de la clase -padre-
class Perro extends Animal{
    //se deben pedir los atributos del padre
    constructor(raza,nombre,peso){
        //super lo manda llamar de la clase principal
        super(nombre,peso)
        this.raza = raza
    }

    getRaza(){
        return this.raza
    }
}

class Gato extends Animal{
    constructor(pelo,nombre,peso){
        super(nombre,peso)
        this.pelo = pelo
    }

    getPelo(){
        return this.pelo
    }
}

var pug = new Perro("Pug","Fido","10kg")
var x = pug.getNombre()
console.log(x)

var y = pug.comer('croquetas')
console.log(y)

var gato = new Gato("café", "Luna", "2kg")
var x = gato.comer("pescado")
console.log(x)