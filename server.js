const http = require('http');

//* Route Parameter like https://www.google.com/home/programming/java ==> programming/java
//* are the Route Parameters.
//* Query String is After (?) like https://www.google.com?name=ali&age=10 ==> name = ali , age = 10 
//* are the query parameters.

const server = http.createServer((req, res) => {
    console.log('Server is starting at port 7800 ....');
}).listen(7800);