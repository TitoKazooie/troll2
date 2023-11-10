const familia = ["luis", "alberto", "ruben"];
const edades = [21, 30, 27];
const saludo = ()=>{
    for (let i = 0; i < familia.length; i++){
        console.log(`Hola, soy ${familia[i]} y tengo ${edades[i]} años`)
    }
}
export default {
    familia, 
    edades,
    saludo
}

// module.exports = {
//     familia, 
//     edades,
//     saludo
// }