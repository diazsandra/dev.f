function suma (a,b) {
    return a+b
}

var sum = suma (3,5)
console.log(sum)

//función anónima
var suma1 = function(a,b){
    return a+b
}
var sum =suma1(3,5)
console.log(sum)

//liskov
var suma2 = (a,b) => {
    return a+b
}

var sum = suma2(3,5)
console.log(sum)

//arrow function
var suma5 = (a,b) => a+b
var sum = suma5(2,3)
console.log(sum)

//Ejercicios
var grados = c => c 
var cen = grados(5)*1.8000+32.00
console.log(cen)
/*
funcion que muestre la tabla de multiplicar de un número
-pasar de decimal a binario

push
pop
*/