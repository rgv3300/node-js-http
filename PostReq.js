const https = require('https')

const data = new TextEncoder().encode(
    JSON.stringify({
        todo: 'Buy the milk'
    })
)

const options = {
    hostname:'localhost',
    port: 3000,
    path: '/todo',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
}

const req = https.request(options, res => {
    console.log(`statusCode:  ${res.statusCode}`)
    
    res.on('data', d => {
        process.stdout.write(d)
    })
})

req.on('error', error => {
    console.log(error)
})


req.write(data)

req.end()