const express = require('express');
const router = express.Router();
const Vaquita = require('../controllers/vaquita');

module.exports = function() {

    router.post('/vaquita', 
       Vaquita.VaquitaPost
    );

    router.get('/vaquita',
       Vaquita.VaquitaGet
    );
  

    
    return router;
}