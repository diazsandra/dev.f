/*
const promise = new Promise((resolve,reject) => {
    const number = 6
    setTimeout(
        ()=> {
            if (number > 5) {
                resolve(number)
            } else {
                reject(new Error('Menor a 5'))
            }
        }, 3000);
});

promise
    .then(x => console.log(x))
    .catch(err => console.log(err))
*/

//Con arrow function
    const promise = new Promise((resolve,reject) => {
        const number = 6
        setTimeout(
            ()=> { number > 5
                ? resolve(number)
                : reject(new Error('Menor a 5'))
                
            }, 3000);
    });
    
    promise
        .then(x => console.log(x))
        .catch(err => console.log(err))



//Normalmente las promesas deben ir dentro de una función
//function randomDelay(max=10, expected =5, delay = 1000){
  //  return new Promise ((resolve, reject) => {

    //});
//}

function randomPromise(number) {
    return new Promise((resolve,reject) => {
        setTimeout(
            ()=> { number > 5
                ? resolve(number)
                : reject(new Error('Menor a 5'))
                
            }, 3000);
    });
}

randomPromise(10)
    .then(number => console.log(number))
    .catch(err => console.log(err))