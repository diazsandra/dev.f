const request = require('request')

/*request.get(
    //a que URL voy a apuntar
    "http://pokeapi.co/api/v2/pokemon/151",
    //cómo lo voy a devolver
    (error,response,body)=> {
        console.log(error)
        console.log(response.statusCode)
        let respuesta = JSON.parse(body)
        //console.log(respuesta.stats)
        for(var i=0; i<respuesta.stats.length;i++){
            console.log('-------')
            console.log(respuesta.stats[i].stat.name)
        }
    });
    */

    function peticionPromesa(){
        return new Promise((resolve,reject) =>{
            //El código que va a ir a la cola de JS
            request.get("http://pokeapi.co/api/v2/pokemon/151",(err,response,body) =>{
                if(response.statusCode==200){
                    resolve(JSON.parse(body))
                }else {
                    reject('Tuvimos un error :(')
                }
            });
        });
    }

    peticionPromesa()
        .then(response => console.log (response))
        .catch(err => console.log(err))