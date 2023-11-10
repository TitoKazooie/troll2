import http from 'http'
import fs from 'fs'

const processRequest = (request, response) => {
  response.setHeader('Content-Type', 'text/html', 'charset=utf-8')
  if (request.url === '/') {
    response.statusCode = 200
    response.end('Bienvenido')
  } else if (request.url === '/foto') {
    fs.readFile('imagen.jpg', (err, data) => {
      if (err) {
        response.statusCode = 500
        response.end('500 Internal error server')
      } else {
        response.setHeader('Content-Type', 'image/png')
        response.statusCode = 200
        response.end(data)
      }
    })
  }
}

const server = http.createServer(processRequest)

server.listen(3000, () => {
  console.log('Funcionando')
})
