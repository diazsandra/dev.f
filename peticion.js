const request = require('request')

request.get(
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