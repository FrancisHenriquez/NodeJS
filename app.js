
const bodyParser = require('body-parser');
const express = require('express');

//*Custom imports
const adminRoutes = require('./routes/admin');
const adminShop = require('./routes/shop')


app.use(bodyParser.urlencoded({extended: false}));

app.use( adminRoutes );
app.use( adminShop );

app.use(( req, res, use ) => {
    res.status(404).send('<h1> Page not found </h1>');

});

 
app.listen(3000);