
const express = require('express');

const app = express();

app.use( '/add-product', (req, res, next) => {
    console.log('In the middleware! of the middleware');
    res.send('<h1> God of War script</h1>');
});

app.use( '/', (req, res, next) => {
    console.log('In the middleware! of the middleware');
    res.send('<h1> Dont be sorry father be better</h1>');
});
 
app.listen(3000);