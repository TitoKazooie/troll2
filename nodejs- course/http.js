const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.url)

  if (request.url === '/') {
    response.write('hello world')
    return response.end()
  }

  if (request.url === '/about') {
    response.write(`
        <h1>Acerca de</h1>
        <a href="/">Volver al inicio</a>
        `)
    return response.end()
  }

  response.write(`
    <h1>Not found</h1>
    <p>No se encontró la página seleccionada</p>
    <a href="/">Volver al inicio</a>
    `)
  response.end()
})

server.listen(3000)

console.log('servidor escuchando en el puerto 3000')
