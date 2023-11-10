const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response', (data) => {
  console.log(data)
})

customEmitter.emit('response', 'hola')
