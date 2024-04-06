#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    usd: 1,
    dir: 3.67,
    pound: 0.79,
    pkr: 280
};
let userAnswer = await inquirer.prompt([{
        name: "from",
        message: "Enter from currency",
        type: "list",
        choices: ["usd", "dir", "pound", "pkr"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["usd", "dir", "pound", "pkr"],
    },
    {
        name: "amount",
        message: "Enter your Amount",
        type: "number",
    },
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
