const request = require('request')

    /*function peticionPromesa(){
        return new Promise((resolve,reject) =>{
            //El código que va a ir a la cola de JS
            request.get("http://pokeapi.co/api/v2/pokemon/26",(err,response,body) =>{
                if(response.statusCode==200){
                    resolve(JSON.parse(body))
                    console.log(response.types)
                }else {
                    reject('Tuvimos un error :(')
                }
            });
        });
    }

    peticionPromesa()
        .then(response => console.log (response))
        .catch(err => console.log(err))
*/
//Ejercicio 2
/*
Hacer una funcion que haga una peticion
   (Ejemplo: peticionLibro(“i robot”);
   http://openlibrary.org/search.json?q=i+robot)
   buscar un libro y traer el o los autores
*/

/*function peticionBook(){
    return new Promise((resolve,reject) =>{
        request.get("http://openlibrary.org/search.json?q=hamlet",(err, response,body)=>{
            if(response.statusCode==200){
                let respuesta = JSON.parse(body)
                    for(var i=0; i<respuesta.docs.length;i++){
                        console.log('-------')
                        console.log(respuesta.docs[i].author_name)
                    }
                
                console.log(response.author_name)
            }else {
                reject('Tuvimos un error')
            }
        })   
    })
}

peticionBook()
    .then(response => console.log(response))
    .catch(err => console.log(err))
*/
//3
/*Hacer una petición por autor y devolver la lista de sus libros 
    function peticionAuthor(){
        return new Promise((resolve,reject) =>{
            request.get("http://openlibrary.org/search.json?author=maquiavelo",(err, response,body)=>{
                if(response.statusCode==200){
                    let respuesta = JSON.parse(body)
                        for(var i=0; i<respuesta.docs.length;i++){
                            console.log('-------')
                            console.log(respuesta.docs[i].title)
                        }
                    
                    console.log(response.title)
                }else {
                    reject('Tuvimos un error')
                }
            })   
        })
    }
    
    peticionAuthor()
        .then(response => console.log(response))
        .catch(err => console.log(err))
*/
//4.- Hacer una peticion a (http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse) 
//y devolver el género de la banda deseada

function peticionBanda(){
    return new Promise((resolve,reject) =>{
        request.get("http://www.theaudiodb.com/api/v1/json/1/search.php?s=pearl+jam",(err, response,body)=>{
            if(response.statusCode==200){
                let respuesta = JSON.parse(body)
                console.log(respuesta.artists.strGenre)
            }else {
                reject('Tuvimos un error')
            }
        })   
    })
}

peticionBanda()
    .then(response => console.log(response))
    .catch(err => console.log(err))

 /*
 5. Traer los pimeros 151 pokemnos de la primera generación y devolver un objeto con el mismo nombre, sus moves, tipos, tamaño y peso
 */   

