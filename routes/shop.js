const express = require('express');

const routerShop = express.Router();

routerShop.get( '/', (req, res, next) => {
   
    res.send('<h1> Dont be sorry father be better</h1>');
});

module.exports = routerShop;
