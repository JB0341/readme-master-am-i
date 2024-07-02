const fs = require('fs');
const inquirer = require('inquirer');
const index = require('./index');



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if(license === 'Mozilla') {
    badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  } else if (license === 'Apache License') {
    badge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license === 'GNU License') {
    badge = '[l-3.0)![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gp'
  } else {
    badge = ''
  }
  return badge;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'Mozilla') {
    licenseLink = 'https://www.mozilla.org/en-US/MPL/2.0/'
  } else if (license === 'Apache License') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GNU License') {
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if(license === 'N/A') {
    licenseSection = ''
  } else {
    licenseSection = `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## ${renderLicenseSection(data.license)} ${renderLicenseBadge(data.license)}
  ### ${renderLicenseLink(data.license)}

  ## Table of Contents:
  ###  * [License](#license)
  ###  * [Description](#description)
  ###  * [Installation](#installation)
  ###  * [Usage](#usage)
  ###  * [Contributing](#contributing)
  ###  * [Tests](#tests)

  
  ## Description:
  - ${data.description}
  
  ## Installation:
  ### Install all listed below to get this app to function:
  - ${data.installation}
  
  ## Usage
  - ${data.usage}

  ## Contributing
  ### Content listed below is open for contributing/collaborating
  - ${data.contributing}

  ## Tests:
  ### Run these commands in terminal to test the app:
  - ${data.tests}

`;
}

module.exports = generateMarkdown;
