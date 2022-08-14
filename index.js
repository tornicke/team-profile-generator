const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const questions = [
  {
    name: "position",
    type: "list",
    message: "Create a new position or quit?",
    choices: ["Manager", "Engineer", "Intern", "Quit"],
  },
];

const engineerQuestions = [
  {
    name: "engineerName",
    type: "input",
    message: "Type in the Engineer's name",
  },
];

let inProgress = true;

const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    switch (answers.position) {
      case "Engineer":
        engineerFunction();
        break;

      case "Manager":
        managerFunction();
        break;

      case "Intern":
        internFunction();
        break;

      //case "Quit": //! or add it to the below case?
      //quitFunction();
      // break;

      case "Quit":
        inProgress = false;
        break;

      default:
        inProgress = false;
        break;
    }
  });
};

init();

teamMembers = [];

function engineerFunction() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    console.log(engineerAnswers);
    const addedEngineer = new Engineer(engineerAnswers.engineerName); //! continue adding others (engineerAnswers.engineerId, etc.)
    teamMembers.push(addedEngineer);
    init();
  });
}

function managerFunction() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);
    const addedManager = new Manager(managerAnswers.managerName); //! continue adding others (engineerAnswers.engineerId, etc.)
    teamMembers.push(addedManager);
    init();
  });
}

function internFunction() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    console.log(internAnswers);
    const addedIntern = new Intern(internAnswers.internName); //! continue adding others (engineerAnswers.engineerId, etc.)
    teamMembers.push(addedIntern);
    init();
  });
}

function quitFunction() {
  const htmlTemplate = generateHtml();
  fs.writeFile(`./dist/index.html`, htmlTemplate, (err) =>
    err ? console.log(err) : console.log("Your page was generated.")
  );
}
//! add the HTML structure
function generateHtml() {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Your Team</title>
    </head>
    <body></body>
  </html>
  `;
}
