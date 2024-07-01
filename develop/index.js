console.log('boomSAUCE');

const fs = require('fs');
const colors = require('colors');
const inquirer = require ('inquirer');
const generateMarkdown = require('./develope/generateMarkdown.js');
//used inquirer to genterate questions
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your README?",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "input",
        name: "description",
        message: "Give me a brief description of your project.",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "input",
        name: "installation",
        message: "Do you have any installation instructions for potential users?",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "input",
        name: "usage",
        message: "Usage.",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "input",
        name: "Contributing",
        message: "How would you like others to contribute?",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "input",
        name: "Tests",
        message: "Any testing Guidelines?",
        validate: (value)=>{ if(value){return true} else {return 'please input value to continue!'}}
    },
    {
        type: "list",
        name: "License",
        message: "Choose your license.",
        choices:['The MIT License', 'The GPL License', 'Apache license', 'GNU license'],
        validate: (value)=>{ if(value){return true} else {return 'please select license to continue!'}} 
    }
])
.then(({
    title,
    description,
    installation,
    usage,
    contributing,
    tests,
    license
})=>{
    const questions = 
})






// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
