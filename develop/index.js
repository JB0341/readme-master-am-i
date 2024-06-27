console.log('boomSAUCE');

const colors = require('colors');
const inquirer = require ('inquirer');

inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your README?",
    },
    {
        type: "input",
        name: "description",
        message: "Give me a brief description of your project.",
    },
    {
        type: "input",
        name: "installation",
        message: "Do you have any installation instructions for potential users?",
    },
    {
        type: "input",
        name: "usage",
        message: "Usage.",
    },
    {
        type: "input",
        name: "Contributing",
        message: "How would you like others to contribute?",
    },
    {
        type: "input",
        name: "Tests",
        message: "Any testing Guidelines?",
    },
    {
        type: "input",
        name: "License",
        message: "Choose your license.",
    }
])
.then((response) =>
console.log(response));






// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
