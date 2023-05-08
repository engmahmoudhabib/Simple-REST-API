const http = require('http');
const fs = require('fs');

//* in nodejs we can not use static files directly like css files , assets files ,etc ....

const html = fs.readFileSync('./public/index.html', 'utf-8');
const server = http.createServer((req, res) => {

    switch (req.url) {
        case '/home':
           // res.setHeader('Content-Type' ,'application/json');
           res.setHeader('Content-Type', 'text/html');
            res.end(html.replace("{{%page%}}", "Home"),);
            break;
        case '/about':
            //res.setHeader('Content-Type' ,'application/json');
            res.setHeader('Content-Type', 'text/html');
            res.end(html.replace("{{%page%}}", "About"));
            break;
        case '/contact':
           // res.setHeader('Content-Type' ,'application/json');
           res.setHeader('Content-Type', 'text/html');
            res.end(html.replace("{{%page%}}", "Contact"));
            break;
    }

}).listen(7800);