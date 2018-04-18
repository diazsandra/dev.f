class triangulo{

    constructor(lado1,lado2,lado3){
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }

    getPerimetro(){
        let suma = this.lado1 + this.lado2 + this.lado3
        console.log("Perimétro Triángulo "+suma)
    }
}

var perimetroTriangulo = new triangulo (5,4,3)

perimetroTriangulo.getPerimetro()

class trianguloArea{

    constructor(base,altura){
        this.base = base
        this.altura = altura
    }

    getArea(){
        let mult = this.base * this.altura
        console.log("Área Triángulo "+mult)
    }
}

var areaTriangulo = new trianguloArea (10,4)

areaTriangulo.getArea()


//EJERCICIO 2
class cuadrado{

    constructor(ladoa){
        this.ladoa = ladoa
    }

    getPerimetroCuadrado(){
        let sumacua = this.ladoa * 4
        console.log("Perimétro Cuadrado "+sumacua)
    }
}

var perimetroCuadrado = new cuadrado (5)
perimetroCuadrado.getPerimetroCuadrado()

class cuadradoArea {
    constructor (ladob){
        this.ladob = ladob
    }

    getAreaCuadrado(){
        let areacua = this.ladob*this.ladob
        console.log("Área Cuadrado "+areacua)
    }
}

var areaCuadrado = new cuadradoArea (5)
areaCuadrado.getAreaCuadrado()

//EJERCICIO 3

class Rectangulo{

    constructor(ladoa){
        this.ladoa = ladoa
    }

    getPerimetroCuadrado(){
        let sumacua = this.ladoa * 4
        console.log("Perimétro Rectangulo "+sumacua)
    }
}

var perimetroCuadrado = new Rectangulo (5)
perimetroCuadrado.getPerimetroCuadrado()

class areaRectangulo {
    constructor (ladob){
        this.ladob = ladob
    }

    getAreaCuadrado(){
        let areacua = this.ladob*this.ladob
        console.log("Área Rectangulo "+areacua)
    }
}

var areaCuadrado = new areaRectangulo (5)
areaCuadrado.getAreaCuadrado()




/*

4.- Haz una clase llamada Persona que siga las siguientes condiciones:
    Sus atributos son: nombre, edad, DNI, sexo, peso y altura.
    calcularIMC()
    esMayorDeEdad()
    El constructor pide nombre, edad,sexo,peso y altura
    Generar el DNI a partir de el nombre, edad y sexo
5.- Crear un objeto Cuenta que tenga los siguientes atributos y metodos:
    Titular y cantidad
    ingresar(cantidad)
    retirar(cantidad)
    Hacer las validaciones previas
    Como regla de negocio no debe de tener más de $900 y menos de $10

    */