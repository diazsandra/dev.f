class Figura {
    constructor(base,altura) {
        this.base = base
        this.altura = altura
    }

    getBase(){
        return this.base
    }

    getAltura(){
        return this.altura
    }

}

class Triangulo extends Figura{
    constructor (lado,base,altura){
        super(base,altura)
        this.lado = lado
    }

    getLado(){
        return this.lado
    }
}

class Rectangulo extends Figura{
    constructor(color,base,altura){
        super(base,altura)
        this.color = color
    }

    getColor(){
        return this.color
    }

}

var triangulo = new Triangulo(3,10,15)
var x = triangulo.getAltura()*triangulo.getBase()
console.log(x)

var rectangulo = new Rectangulo("rojo",9,15)
var y = rectangulo.getAltura()*rectangulo.getBase()
console.log(y)


//2

class Electrodomestico {
    constructor(precio,color,peso,consumo){
        this.precio = precio
        this.color = color
        this.peso = peso
        this.consumo = consumo
    }

    getPrecio(){
        return this.precio
    }
    getColor(){
        return this.color
    }
    getPeso(){
        return this.peso
    }
    setConsumo(newConsumo){
		this.consumo = newConsumo
	}
}

class Lavadora extends Electrodomestico {
    constructor(carga,precio,color,peso,consumo) {
        super(precio,color,peso,consumo)
        this.carga = carga
    }

    getCarga(){
        return this.carga
    }

    precioFinal(){
        let finalPrice = this.precio*this.carga
        console.log(finalPrice)
    }
}

var finalLavadora = new Lavadora (2,200,"rosa",5,20)
finalLavadora.precioFinal()

finalLavadora.setConsumo(50)
console.log(finalLavadora)

//3
class Construccion {
    constructor(puertas,ventanas,pisos,direccion,altura2,largo,ancho){
        this.puertas = puertas
        this.ventanas = ventanas
        this.pisos = pisos
        this.direccion = direccion
        this.altura2 = altura2
        this.largo = largo
        this.ancho = ancho
    }

    getAltura2(){
        return this.altura2*this.altura2
    }
    getLargo(){
        return this.largo*this.largo
    }
    getAncho(){
        return this.ancho*this.ancho
    }
    getDireccion(){
        return this.direccion
    }
    setDireccion(newDireccion){
        this.direccion = newDireccion
    }
}

class Casa extends Construccion {
    constructor(puertas,ventanas,pisos,direccion,altura2,largo,ancho){
        super(puertas,ventanas,pisos,direccion,altura2,largo,ancho)
    }
}

class Edificio extends Construccion {
    constructor(puertas,ventanas,pisos,direccion,altura2,largo,ancho){
        super(puertas,ventanas,pisos,direccion,altura2,largo,ancho)
    }
}

var casa = new Casa(2,10,3,"Mancera 15",15,20,5)
var x = casa.getAltura2()
console.log(x)
casa.getAncho()
