let cowsay = require('cowsay');
// Cuando se crea un nuevo cliente
exports.VaquitaPost = async (req, res, next )  => {
    //Este es para el mensaje desde el body con req.body obtenemos el mensaje que el cliente esta ingresando   
    const  {msg}=req.body;
    //Hacemos un try por si hay un error
    try {
        res.setHeader('Content-Type', 'text/txt')
        res.end(
          cowsay.say({
             text: msg,
              e : "oO",
              T : "U "
          }))
      
    //Aqui es para que se muestre en consola
       console.log(cowsay.say({
        text : msg,
        e : "oO",
        T : "U "
    }));
    } catch (error) {
        console.log(error);
        //el next es por si hay un error pase ala siguiente linea de ejecucion 
        next();
    }
}
//Aqui obtenemos la informacion de cowsay 
exports.VaquitaGet = async (req, res, next) => {
    
   //solo nos responde ala informacion del codigo que implementamos
    try {    
          res.setHeader('Content-Type', 'text/txt')
          res.end(
            cowsay.say({
                text : 'Hola Hola',
                e : "oO",
                T : "U "
            }))
    //Aqui es para que se muestre en consola
       console.log(cowsay.say({
        text : "Hola Hola",
        e : "oO",
        T : "U "
    }));
            
            

          
    } catch (error) {
        console.log(error);
        next();
    }
}
