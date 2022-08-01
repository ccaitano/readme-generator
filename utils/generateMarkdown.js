// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let readmeBadge = "";
let readmeLink = "";
let readmeLicense = "";

function renderLicenseBadge(license) {
  const apacheBadge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  const mitBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  const noBadge = "";
  switch (license) {
    default:
      readmeBadge = noBadge;
      break;
    case "Apache 2.0":
      readmeBadge = apacheBadge;
      break;
    case "MIT":
      readmeBadge = mitBadge;
      break;
    case "None":
      readmeBadge = noBadge;
      break;  
  }
  console.log(readmeBadge);
  return readmeBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const apacheLink = "https://opensource.org/licenses/Apache-2.0";
  const mitLink = "https://opensource.org/licenses/MIT)";
  const noLink = "";
  switch (license) {
    default:
      readmeLink = noLink;
      break;
    case "Apache 2.0":
      readmeLink = apacheLink;
      break;
    case "MIT":
      readmeLink = mitLink;
      break;
    case "None":
      readmeLink = noLink;
      break;  
  }
  return readmeLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const apacheLicense = `
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  `;
  const mitLicense = `
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  `;
  const noLicense = "";
  switch (license) {
    default:
      readmeLicense = noLicense;
      break;
    case "Apache 2.0":
      readmeLicense = apacheLicense;
      break;
    case "MIT":
      readmeLicense = mitLicense;
      break;
    case "None":
      readmeLicense = noLicense;
      break;  
  }
  return readmeLicense;
}

// function renderTitle(title) {
//   return `# ${data.title}`;
// }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = data.license;
  renderLicenseBadge(license);
  renderLicenseLink(license);
  renderLicenseSection(license);
    readMeString = `
# ${data.title} - ${readmeBadge}

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
    
## **License 🎫**

[${data.license} License](${readmeLink})
    
Copyright &copy; 2022 ${data.username}
  
<p>

${readmeLicense}
    
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

  return readMeString;
}


module.exports = generateMarkdown;
