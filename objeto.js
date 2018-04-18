//Perro
class Perro{
	
	constructor(color,tamano,peso){
		this.colores = color
		this.tamanos = tamano
		this.pesos = peso
	}

	/*Atributos
	color
	tamano
	peso*/ 

	//Métodos
	ladrar(){
		return 'Guaau'
	}

	getColor(){
		return this.colores
	}

	//modifica los parámetros
	setColor(newColor){
		this.colores = newColor
	}

	suma(){
		let suma = this.pesos + 12
		console.log(suma)
	}

}

var ayudanteSanta = new Perro("Café","Grande","Gordo")
var pug = new Perro("Blanco", "Pequeño", "Gordo")

console.log(ayudanteSanta)
console.log(pug)

pug.getColor()
ayudanteSanta.getColor()

pug.suma()

console.log(ayudanteSanta)
//modifica la variable
ayudanteSanta.setColor("Negro")
console.log(ayudanteSanta)

//return 
var x = pug.ladrar()
console.log(x)