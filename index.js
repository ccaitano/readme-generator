// TODO: Include packages needed for this application
//Writes files
const fs = require("fs");
//Asks user for data
const inquirer = require("inquirer");
//Generate HTML file
const generateMd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Welcome to the README File Generator",
        name: "welcome"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //data = markdown string
    //filename = OUTPUT_README.md
}

// TODO: Create a function to initialize app
function init() {}
    //Ask the user the questions

        //THEN I want to pass responses to generageMarkdown so we can get the markdown

        //THEN write the 'markdown' to a file like 'OUTPUT_README.md'

// Function call to initialize app
init();
