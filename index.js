const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//questions
inquirer.prompt([
  {
    type: "input",
    name: "fileTitle",
    message: "Title of this new file we are creating? (required)",
  },
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
    type: "checkbox",
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
    name: "question",
    message: "Your contact info",
  },
]);

function writeToFile(fileName, data) {
  fs.appendFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log(`${fileName}.md has been generated.`)
  );
}

//function to initialize
async function init() {
  let answers = await userInput();
  writeToFile(answers.fileName, generateMarkdown(answers));
}

init();

//   .then((responses) => {
//     const filename = `${responses.name.toLowercase()}.md`;
//     fs.writeFile(filename, JSON.stringify(responses, null, 2), (err) =>
//       err ? console.log(err) : console.log("success!")
//     );
//   });
