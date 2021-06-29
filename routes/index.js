const express = require('express');
const router = express.Router();
const Vaquita = require('../controllers/vaquita');
let cowsay = require('cowsay');
module.exports = function() {
    router.get('/', 
    (req, res) => {

        res.render('index', {
            nombre: "nada"
        });
            });
       
router.post('/',Vaquita.VaquitaPost);
       
    return router;
}