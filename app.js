const { add, subtract, multiply, divide } = require('./node_modules/uwitonze-basic-calculator/index.js')
function multiplicationTable(number){
    for(let i=1 ; i<13;i++){
        console.log(`${i} * ${number} = ${multiply(i, number)}`)
    }
}
multiplicationTable(5)
console.log("Functionality of different  operators using the package that Installed:")
console.log (`SumofTwoNumbers = ${add (1,5)}`)
console.log (`SubtractionOfTwoNumbers = ${subtract(3,2)}`)
console.log (`divideTwoNUmbers = ${divide(8,4)}`)