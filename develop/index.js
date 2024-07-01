// TODO: Include packages needed for this application
console.log('boomSAUCE');

const fs = require('fs');
const colors = require('colors');
const inquirer = require ('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
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
        choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU License'],
        validate: (value)=>{ if(value){return true} else {return 'please select license to continue!'}} 
    }
];









// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generatedREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
        let fileContent = generateMarkdown(data);
        writeToFile(fileContent)
    });
}

// Function call to initialize app
init();


// Exports

module.exports = questions; 