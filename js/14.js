//Arrays
const numeros=[10,20,30,40,50]

// console.table(numeros)

const meses=["enero","Febrero","Marzo","Abril","Mayo"]

//Pueden contener todo tipo de datos

// console.log(numeros[3])


//Conocer la extension de un arreglo
// console.log(numeros.length)

// numeros.forEach(function(numero){
//     console.log(numero)
// })

numeros.push(60) //Se agrega al final del arreglo ese dato
numeros.push(70)

numeros.unshift(11) //Se agrega al principio del arreglo

console.table(numeros)

meses.pop() //Quita el ultimo elemento del arreglo
meses.shift() //Quita el primer elemento
meses.splice(2,1) //Toma dos valores, la posicion de cual quieres eliminar y cuantos quieres eliminar

console.log(meses)

//Rest operator/Spread operator
const nuevoArreglo=[...meses,"junio"]//Esto es como hacer un push al final del arreglo solo que no se modifican los valores opriginales
const nuevoArregloo=["junio",...meses]//Asi se agrega al principio
console.log(nuevoArreglo)