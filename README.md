# CALCULATOR PACKAGE
## Description
 This is a simple calculator program that can perform basic arithmetic operations. It's designed to be used as an example for writing packages.It used the package from  [uwitonzebrendah](https://www.npmjs.com/package/uwitonze-basic-calculator?activeTab=readme)
## Installation
### To install this package use:
npm install uwitonze-basic-calculator
## USAGE
> const { add, subtract, multiply, divide } = require('./node_modules/uwitonze-basic-calculator/index.js')
function multiplicationTable(number){
    for(let i=1 ; i<13;i++){
        console.log(`${i} * ${number} = ${multiply(i, number)}`)
    }
}

> multiplicationTable(5)

> console.log("Functionality of different  operators using the package that Installed:")

> console.log (`SumofTwoNumbers = ${add (1,5)}`)

> console.log (`SubtractionOfTwoNumbers = ${subtract(3,2)}`)

> console.log (`divideTwoNUmbers = ${divide(8,4)}`)
 
 ## API Documentation

Here's a detailed description of each function:

add(a, b): Takes two numbers (a and b) and returns their sum.

subtract(a, b): Takes two numbers (a and b) and returns their difference.

multiply(a, b): Takes two numbers (a and b) and returns their product.

divide(a, b): Takes two numbers (a and b) and returns their quotient. Throws an error for division by zero.

## Contributing
We welcome contributions to improve this package. Feel free to submit pull requests with bug fixes or enhancements on my github account [uwitonzebrenda](https://github.com/brendahuwitonze)

## License
This package is licensed under the SIT License.

package.json:

In your package.json file, ensure you have a clear description of the package, keywords for searchability, and the entry point for your calculator functions:
## JSON
> {

  > "name": "use-calculator-package",

  > "version": "1.0.1",

  > "description": "",

  > "main": "index.js",

  > "scripts": {

    "test": "echo \"Error: no test specified\" && exit 1"

  },
  > "keywords": [],

  > "author": "Brendah",

  > "license": "ISC",

  > "dependencies": {

   > "uwitonze-basic-calculator": "^1.0.0"

 >  }

> }



