const http = require('http');

//* Route Parameter like https://www.google.com/home/programming/java ==> programming/java
//* are the Route Parameters.
//* Query String is After (?) like https://www.google.com?name=ali&age=10 ==> name = ali , age = 10 
//* are the query parameters.

const server = http.createServer((req, res) => {
    console.log('Server is starting at port 7800 ....');
    switch (req.url) {
        case '/home':
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify({ message: 'Success', data: [{ home: 'True' }] }));
            res.end();
            break;
        case '/contact':
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify({ message: 'Success', data: [{ contact: 'True' }] }));
            res.end();
            break;
        case '/about':
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify({ message: 'Success', data: [{ about: 'True' }] }));
            res.end();
            break;
        case '/persons':
            res.setHeader('Content-Type', 'application/json');
            res.statusCode = 200;
            res.write(JSON.stringify({ message: 'Success', data: [{ persons: 'True' }] }));
            res.end();
            break;
    }
}).listen(7800);