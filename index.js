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
function writeToFile(data) {
    readMeString = `
    # ${data.title} - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
    ${data.description}
    
    ➡️ [DEPLOYED APPLICATION](https://${data.username}.github.io/${data.title}/)
    
    ## **Description**
    
    The Weather Dashboard allows the user search for weather for a particular city. Upon entering a city, the current weather for that city will be displayed including the temperature, humidity, UV index, windspeed and weather icon. The user will also be presented with a five day forecast for the same city. This website will save the user's recent history to recall their latest searches.
    
    ## **Table of Contents**
    
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Technology](#technology)
    - [Questions](#questions)
    
    ## **Installation 💽**
    
    To install this application, make a clone of this repository to your local machine. Open the repository in your code editor of choice, and open the index.html file in your browser 🖥️
    
    ## **Usage 📜**
    
    Visit the [deployed site](https://${data.username}.github.io/${data.title}/), then:
    
    - Enter a city in the search input field and select the Search button
    - Current weather and a five day forecast for the selected city will be displayed on the screen.
    - Select the Clear Search History button to remove all recent searches.
    
    ![GIF of deployed site usage](./assets/Weather-Dashboard.gif)
    
    ## **License 🎫**
    
    <p>
    ${data.license} License
    
    Copyright &copy; 2022 ${data.username}
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
    
    </p>
    
    ## **Technology 🖥️**
    
    - [JavaScript](https://www.javascript.com/) Scripting Language
    - [HTML](https://html.com/) Markup Language
    - [CSS](https://www.w3schools.com/css/) Stylesheet Language
    - [Bootstrap](https://getbootstrap.com/) Bootstrap Toolkit
    - [Day.js](https://day.js.org/) Day.js
    - [jQuery](https://jquery.com/) jQuery Library
    - [OpenWeather](https://openweathermap.org/) OpenWeather API
    
    ## **Questions ❓**
    
    For any questions or contributions please contact me on Github or by e-mail:
    
    [Github Profile](https://www.github.com/${data.username})  
    [Email Me](mailto:${data.email})
    `

    fs.writeFile('output_README.md', readMeString, (err) =>
        err ? console.error(err) : console.log("output_README.md file successfully created!")
    )
}

// TODO: Create a function to initialize app
function init() {
    //Ask the user the questions
        inquirer
            .prompt([ 
                ...questions
            ])
            .then((response) => {
                writeToFile(response);
            });
    }

// Function call to initialize app
init();

