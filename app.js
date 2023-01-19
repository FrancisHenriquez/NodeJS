const http = require ('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Conten-type', 'text/html');
    res.write('<html> <head><title> My First Pagoe </title></head> <body> <h1>Dont be sorry father be better</h1></body></html>')
});

server.listen(3000);