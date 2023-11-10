const fs = require('fs')

// const first = fs.readFileSync("./data/first.txt", "utf-8")
// const second = fs.readFileSync("./data/second.txt", "utf-8")

// console.log(first)
// console.log(second)

// fs.writeFileSync("./data/third.txt", "Este es un tercer archivo", {
//     flag: "a"
// })

fs.readFile('./data/first.txt', (error, data) => {
  error ? console.log(error) : console.log(data.toString())

  fs.readFile('./data/second.txt', (error, data) => {
    error ? console.log(error) : console.log(data.toString())

    fs.readFile('./data/third.txt', (error, data) => {
      error ? console.log(error) : console.log(data.toString())

      fs.writeFile('./data/lolazo.txt', 'lolazooo', (error, data) => {
        console.log(error)
        console.log(data)
      })
    })
  })
})
