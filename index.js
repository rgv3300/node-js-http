const http = require('http')

const port = process.env.PORT || 3002

const server = https.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html')
    res.end('<h1>Hello, world!</h1>')
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})

