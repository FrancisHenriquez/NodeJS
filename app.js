
const express = require('express');

//*Custom imports
const adminRoutes = require('./routes/admin');
const adminShop = require('./routes/shop')

const app = express( ({ extended: false} ));

app.use( adminRoutes );

app.use( adminShop );

 
app.listen(3000);