#! /usr/bin/env node
import inquirer from "inquirer"
let currency:any = {
    USD: 1,
    GPB: 0.76, 
    EUR: 0.91,
    INR: 74.57,
    PKR: 280

}
let answer = await inquirer.prompt([
    {
        name: "from", message: "enter your currency from", type:"list", choices:["USD","GPB","EUR","INR","PKR"] 
    },
    {
        name: "to", message: "enter your currency to", type:"list", choices:["USD","GPB","EUR","INR","PKR"]
    },
    {
        name: "amount", message: "enter your amount", type:"number"
    }
])

// let fromcurrency = answer.from
// let tocurrency = answer.to
let fromamount = currency[answer.from]
let toamount = currency[answer.to]
let amount = answer.amount
let baseamount = amount /fromamount
let convertedamount = Math.round(baseamount * toamount) 
console.log(convertedamount)

// Here usd is our base currency. 