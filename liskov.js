class Largometraje {
    constructor(tiempo){
        this.tiempo = tiempo
    }

    getTiempo(){
        return this.tiempo
    }
}

class Pelicula extends Largometraje {
    constructor(tiempo,genero){
        super(tiempo)
        this.genero = genero
    }
}

class Documental extends Largometraje {
    constructor(tiempo,director){
        super(tiempo)
        this.director = director
    }
}

class Cine {
    //parametro
    constructor(largometraje){
        this.largometraje = largometraje
    }

    reproducirLargometraje(){
        return `El largometraje va a durar ${this.largometraje.getTiempo()}` 
    }

}

var doc = new Documental("90 min","El perro")
var pel = new Pelicula("120 min","Tron")

var cine = new Cine(doc)
var rep = cine.reproducirLargometraje()
console.log(rep)