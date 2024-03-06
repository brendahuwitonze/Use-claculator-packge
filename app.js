const { add, subtract, multiply, divide } = require('./node_modules/uwitonze-basic-calculator/index.js')
function multiplicationTable(number){
    for(let i=1 ; i<13;i++){
        console.log(`${i} * ${number} = ${multiply(i, number)}`)
    }
}
multiplicationTable(5)