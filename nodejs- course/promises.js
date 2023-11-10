// const {readFile} = require("fs")
// const {promisify} = require("util")
const { readFile } = require('fs/promises')

// const getText= (pathFile)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(pathFile, "utf-8", (err, data)=>{
//             if(err){
//                 reject(err)
//             }
//                 resolve(data)
//         })
//     })
// }

// getText("./data/first.txt")
//     .then((result) => console.log(result))
//     .then(getText("./data/third.txt")
//     .then((result) => console.log(result)))
//     .catch((error) => console.log(error))

// const readFilePromise = promisify(readFile)

const read = async () => {
  try {
    const result = await readFile('./data/first.txt', 'utf-8')
    const result2 = await readFile('./data/second.txt', 'utf-8')
    console.log(result)
    console.log(result2)
  } catch (error) {
    console.log(error)
  }
}

read()
