import path from 'path'

const directory = (path.join('/users', 'david', 'desktop', 'hola.js'))

console.log(path.parse(directory))

console.log(path.resolve('dist'))

console.log(path.sep)
