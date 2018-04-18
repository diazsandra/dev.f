var cars = ["Volvo","BMW","Ford"]
var numbers = [78,3,87,90,5,687,0,97,1]
//console.log(cars.length)
//console.log(cars[1])

//Para imprimir toda la lista sin saber cuántos parámetros tiene

/*for (var i=0;i<cars.length; i++){
    console.log(cars[i])
}*/

console.log(cars)
cars.push("Nissan")
console.log(cars)
cars.splice(1,0,"Honda")
console.log(cars)
//ordena de manera ascendente
cars.sort()
console.log(cars)
//ordena de manera descendente
cars.reverse()
console.log(cars)
numbers.sort()
console.log(numbers)


//Ejercicios
var nombre; 
  nombre=new Array(4);
  nombre[0]='Alex';
  nombre[1]='Sofia';
  nombre[2]='Viridiana';
  nombre[3]='Abril';
  
var sueldo;
  sueldo=new Array(4);
  sueldo[0]=15000;
  sueldo[1]=18000;
  sueldo[2]=10000;
  sueldo[3]=30000;

sueldo.sort()
console.log(sueldo)
console.log()

var max = Math.max(...sueldo)
console.log(max)

var empleados = {
    "Saúl" : 15000,
    "Mónica" : 12000,
    "Marco" : 20000,
    "Moni" : 16000,
}

function mayor (nombre,sueldo) {
    var num; 
    num = Math.max(...sueldo);
    console.log(num)
}

//Ejercicio 2
var text = "";
for (var i = 0; i < 100; i++) {
  if(i%2 == 0)
    text += i;
}

console.log(text)



