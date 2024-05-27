#! /usr/bin/env node

// 1 line means to publish this program on npm

import inquirer from "inquirer"

// Get value to user
const answer = await inquirer.prompt({
    name:"sentence",
    type:"input",
    message:"Write your sentence for word count "
})
// Using Trim function to remove white spaces and using split function make array to seperate words
const words = answer.sentence.trim().split(" "); //(" ") double quotation in space means to seperate words after one space
console.log(`Total words in your sentence ${words.length} `)// using .length means for count words