// TODO: Include packages needed for this application
//Writes files
const fs = require("fs");
//Asks user for data
const inquirer = require("inquirer");
//Generate markdown file
const generateMd = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Welcome to the README File Generator. Please press 'ENTER' to begin.",
        name: "welcome"
    },
    {
        type:"input",
        message: "Please enter your project title: ",
        name: "title"
    },
    {
        type: "input",
        message: "Please enter your project description: ",
        name: "description"
    },
    {
        type: "input",
        message: "Please enter your installation instructions: ",
        name: "installins"
    },
    {
        type: "input",
        message: "Please enter your usage information: ",
        name: "usage"
    },
    {
        type: "input",
        message: "Please enter your contribution guidelines: ",
        name: "contributions"
    },
    {
        type: "input",
        message: "Please enter your test instructions: ",
        name: "testins"
    },
    {
        type: "list",
        message: "Please choose a liceense applicable to your project.",
        name: "license",
        choices: ["MIT","None"],
        default: "None"
    },
    {
        type: "input",
        message: "Please enter your GitHub username: ",
        name: "username"
    },
    {
        type: "input",
        message: "Please enter your e-mail address: ",
        name: "email"
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
    // for (const question of questions) {
    //     inquirer
    //         .prompt([
    //             {
    //                 question
    //             },
    //         ])
    //         .then(answers => {
    //             console.log(question[2]);
    //         });
    // }
        //THEN I want to pass responses to generateMarkdown so we can get the markdown

        //THEN write the 'markdown' to a file like 'OUTPUT_README.md'

// Function call to initialize app
init();
