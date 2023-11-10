const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Welcome to the server')
    return res.end()
  }

  if (req.url === '/about') {
    for (let i = 0; i < 10000; i++) {
      console.log(Math.random() * i)
    }

    res.write('about page')
    return res.end()
  }

  res.end('Not found')
})

server.listen(3000)
console.log('servidor en el puerto 3000')
