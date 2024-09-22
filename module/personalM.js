
/**********Common Js Export Module 
 * 
const chalk = require("chalk");
function success(msg="Value is missing" , action){
    if(action)
    {
       console.log("Database",chalk.bgGreen.black(msg));
       return;
    }

    console.log(chalk.bgGreen.black(msg));
}

function error(msg="value is missing",action){
    if(action)
    {
        console.log("Database",chalk.bgRed.white(msg));
        return;
    }  
    
    console.log(chalk.bgRed.white(msg));
    
}

module.exports = {
    success,
    error
}
 ***** End Common Js Export Module ***/


/******ECMA Script New Js ********** */

//const chalk = require("chalk"); old
import chalk from 'chalk'; //New 
export function success(msg="Value is missing" , action){
    if(action)
    {
       console.log("Database",chalk.bgGreen.black(msg));
       return;
    }

    console.log(chalk.bgGreen.black(msg));
}

export function error(msg="value is missing",action){
    if(action)
    {
        console.log("Database",chalk.bgRed.white(msg));
        return;
    }  
    
    console.log(chalk.bgRed.white(msg));
    
}


/****** End ECMA Script New Js ********** */