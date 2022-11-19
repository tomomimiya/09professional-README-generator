const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//questions
var questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Description of it? (required)",
  },
  {
    type: "input",
    name: "installation",
    message: "List any required packages for installation of this application",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage, or example of this project",
  },
  {
    type: "list",
    name: "license",
    message: "Choose the license",
    choices: ["Apache", "MIT", "GPL", "none"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter your guideline for contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "how do you test this application?",
  },
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

//function to initialize
function init() {
  inquirer.prompt(questions).then((responses) => {
    //console.log(responses);
    var readmeOutput = generateMarkdown(responses);
    //console.log(readmeOutput);
    fs.writeFile("README.md", readmeOutput, (err) => {
      if (err) {
        console.log("cannot create file!");
      }
      console.log("successfully create file!");
    });
  });
}

init();
