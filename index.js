import chalk from "chalk";

console.log(chalk.blue("It works"));

let myUnusedVariable = 42; 
if (myUnusedVariable == 42) { 
    console.log("This should trigger the 'eqeqeq' rule");
}