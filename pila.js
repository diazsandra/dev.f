/*
console.log(1)
setTimeout(function callback(){
    console.log(2)
},3000)
console.log(3)
*/

//Cuello de botella 
console.log(1)
setTimeout(()=>{
    console.log(2)
},3000)
for (var i = 0; i <99999; i++); 
console.log(3)
