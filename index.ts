#! /usr/bin/env node
import inquirer from "inquirer"

let myPin:number = 2006;
let myBalance:number = 10000;

let answer = await inquirer.prompt([{
    name: "Pin",
    message: "Please Enter Pin",
    type: "number"
}])

if(answer.Pin === myPin){
    let firstOption = await inquirer.prompt([{
        message: "What service you want to use?",
        name: "Service",
        type: "list",
        choices: ["Withdraw", "Fast Cash", "Check Balance"]
    }])
    console.log(firstOption)

    if(firstOption.Service === "Withdraw"){
        let moneyWithdraw = await inquirer.prompt([{
            name: "withdrawAmount",
            message: "How much money you want to withdraw?",
            type: "number",
        }])
        if(myBalance >= moneyWithdraw.withdrawAmount){
            myBalance -= moneyWithdraw.withdrawAmount;
            console.log(`Your remaining Balance is: ${myBalance}`)
        }else{
            console.log("Influence Amount");
        }
    }else if (firstOption.Service === "Fast Cash"){
        let moneyCash = await inquirer.prompt([{
            name: "Fastcash",
            message: "How much money you want to Cash?",
            type: "list",
            choices: [1000, 2000, 3000, 5000, 7000, 10000]
        }])
        myBalance -= moneyCash.Fastcash;
        console.log(`Your remaining Balance is: ${myBalance}`)
    }else if(firstOption.Service === "Check Balance"){
        console.log(`Your Balance is: ${myBalance}`)
    }

    console.log("Thank you for using this ATM")
}else{
    console.log("The pin code is wrong")
}