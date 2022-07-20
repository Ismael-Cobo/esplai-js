
// // //Asignaciones y cálculos
// // const numeros = (a,b) => `El primer número es ${a} y el segundo número es ${b}`

// // console.log(numeros(1,2))


// // const mayor = (a,b,c) => {
// //   if(a>b && a>c) return `El número mayor es ${a}`
// //   if(b>a && b>c) return `El número mayor es ${b}`
// //   return `El número mayor es ${c}`
// // }

// // console.log(mayor(5,4,3))


// // const calcula = (a,b) =>   
// //   console.log(`
// //   		${a} + ${b} = ${a+b}
// //       ${a} - ${b} = ${a-b}
// //       ${a} * ${b} = ${a*b}
// //       ${a} / ${b} = ${a/b}
// // `)  


// // calcula(1, 2)


// // const xx = (chicos, chicas) => {
// //   return (chicas * 100)/(chicos+chicas)
// // }

// // console.log(+xx(10, 5).toFixed(2))

// // // FIN Asignaciones y cálculos



// // // Comparaciones

// // const compara = (a,b) => {
// //   if(a>b) return a
// //   if(a<b) return b
// //   return 'son iguales'
// // }

// // console.log(compara(3,2))


// // const operacion = (num1, num2, op) => {
  
// //   if(op === "s") return num1 + num2
// //   if(op === "r") return num1 - num2
// //   if(op === "m") return num1 * num2
// //   if(op === "d") return num1 / num2
// //   return 'Error'
// // }

// // console.log(operacion(1,2,'s'))


// // const anyo = (num) => {
// //   if(num%400 === 0 || num%4 === 0 && num%100 !== 0) return 'Es bisiesto'
// //   return 'No lo es'
// // }

// // console.log(anyo(2024))



// // // FIN Comparaciones


// // //Bucles


// // let num = Number(prompt('Entra un número del 1 al 10'))
// // let isCorrect = true
// // while(isCorrect) {
// //   console.log(num >= 1 && num <= 10 )
// //   if(num >= 1 && num <= 10 ){
// //     console.log('**********')
// //     isCorrect = false
// //   } else {

// //     num = Number(prompt('Te has equivocado  entra un número del 1 al 10'))
// //   }


// // }

// // alert(`El número ${num} es correcto`)


// // let num = Number(prompt('Entra un número'))
// // let total = 0
// // let isCorrect = true
// // while(isCorrect) {
  
// //   if(num <= 0){
// //     isCorrect = false
// //   } else {
// //     total = total + num
// //     num = Number(prompt('Entra un número'))
// //   }


// // }

// // alert(`El total es ${total}`)

//************************************ */

// let num = Number(prompt('Entra un número'))
// let menor = num
// let mayor = num
// let media = num
// let isCorrect = true

// let numeros = []


// const calcularMedia = (arr) => {
//   let total = 0
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i]
//   }

//   return total/(arr.length)
// }

// while(isCorrect) {
  
//   if( num <= 0 ){
//     if( numeros.length === 0 ) alert('Error')
//     isCorrect = false
//   } else {
    
//     numeros.push(num)
//     mayor = mayor < num ? num : mayor
//     menor = menor > num ? num : menor 
//     media = calcularMedia(numeros)
    
//     num = Number(prompt('Entra un número'))
//   }
  
  
// }

// console.log(`
//   Mayor: ${mayor}
//   Menor: ${menor}
//   Media: ${media}
// `)

// console.log(numeros)


//************************************ */

// const factorial = (num) => {
//   let total = 1
//   for (let i = num; i >= 1; i--) {
    
//     total = total * i
    
//   }

//   return total
// }

// console.log(factorial(5))


//************************************ */

// const sumaPares = (num) => {

//   let total = 0
//   for (let i = 0; i <= num; i++) {
    
//     total = i%2 === 0 ? total + i : total
    
//   }

//   return `La suma de los ${num} primeros números pares es ${total}.`

// }

// console.log(sumaPares(10))

//************************************ */

// let times = 1
// let password = prompt('Introduazca la contraseña')
// let isCorrect = true
// let text = ''

// while (isCorrect) {
//   if(password === 'rebeca'){
//     alert('Contraseña correcta')
//     isCorrect = false
//   } else if(times >= 3) {
//     alert('Acceso denegado')
//     isCorrect = false
//   } else {
//     password = prompt('Intentelo de nuevo')
//     times++
//   }

// }

//************************************ */

// const time = document.querySelector('#time')
// let value = Number(prompt('Escribe el número de segundos'))

// time.innerHTML = value

// const interval = setInterval(() =>{

//   value--

//   if(value === 0) {
//     time.innerHTML = 'Boom'
//     return clearInterval(interval)
//   } 

//   time.innerHTML = value


// }, 1000)



// // // FIN Bucles





