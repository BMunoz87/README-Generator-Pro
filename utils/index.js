const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const generateMarkdown = require('./generateMarkdown');

const questions = [
{
    type: "list",
    message: "What license is used for this project?",
    name: "license",
    choices:['Unlicense', 'Apache-2.0', 'BSD-3-Clause', 'BSD-2-Clause', 'gpl-license', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'ISC']
},
{
    type: "input",
    message: "What is the title of this project?",
    name: "title",
    validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title.');
                return false;
            }
        }
},
{
    type: "input",
    message: "What is the description of this project?",
    name: "description",
    validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for the project.');
                return false;
            }
        }
}, 
{
    type: "input",
    message: "How to install this project?",
    name: "installation"
},
{
    type: "input",
    message: "How to use this project?",
    name: "usage"
},
{
    type: "input",
    message: "How to contribute to this project?",
    name: "contribute"
},
{
    type: "input",
    message: "What is your email?",
    name: "email",
    validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email');
                return false;
            }
        }
},
{
    type: "input",
    message: "What is your GitHub user name?",
    name: "github",
    validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter your GitHub user name!');
                return false;
            }
        }
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFileSync(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        } 
        })
    
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();