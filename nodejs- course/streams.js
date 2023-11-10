 const {writeFile} = require("fs/promises")

 const createBigFile = async()=>{
     await writeFile("./data/pejelagarto.txt", "hello world".repeat(100000))
 }

 createBigFile()

// const {createReadStream} = require("fs")

// const stream = createReadStream("./data/pejelagarto.txt", {
//     encoding: "utf-8"
// })

// stream.on("data", (chunk) =>{
//     console.log(chunk)
// })

// stream.on("end", ()=>{
//     console.log("Terminó de leer")
// })

// stream.on("error", (error)=>{
//     console.log(error)
// })