let cowsay = require('cowsay');
// Cuando se crea un nuevo cliente
exports.VaquitaPost = async (req, res,next) => {
    const {mensaje}=req.body;
      
      try {
        
      
        res.end(
          cowsay.say({
             text: mensaje,
              e : "oO",
              T : "U "
          }))
      
          
      } catch (e) {
          res.status(400).json({
              Error:e
            })
            console.log('Hay un error',e);
            next();
          
      }
    
           };
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
    
            
            

          
    } catch (error) {
        console.log(error);
        next();
    }
}
