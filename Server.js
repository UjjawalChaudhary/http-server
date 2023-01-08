const http = require('http');

const server = http.createServer((req,res) => {
const url= req.url;
if(url==='/'){
    res.write('<body>Hello</body>');
}
})

server.listen(4000);