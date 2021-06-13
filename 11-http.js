const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short')
    } else {
        res.end(`
        <h1>Oops</h1>
        <p>We can not find the page you want</p>
        <a href="/">back home</a>
        `)
    }

})

server.listen(9000)