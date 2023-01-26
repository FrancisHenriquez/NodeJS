const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');

const app = express();
//*Custom imports
const adminRoutes = require('./routes/admin');
const adminShop = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));

app.use( '/admin', adminRoutes );
app.use( adminShop );

app.use(( req, res, use ) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));

});

 
app.listen(3000);