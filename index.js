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

const managerQuestions = [
  {
    name: "managerName",
    type: "input",
    message: "Type in the Manager's name",
  },
  {
    name: "managerId",
    type: "input",
    message: "Type in the Manager's ID",
  },
  {
    name: "managerEmail",
    type: "input",
    message: "Type in the Manager's email",
  },
  {
    name: "managerOfficeNumber",
    type: "input",
    message: "Type in the Manager's office number",
  },
];

const engineerQuestions = [
  {
    name: "engineerName",
    type: "input",
    message: "Type in the Engineer's name",
  },
  {
    name: "engineerId",
    type: "input",
    message: "Type in the Engineer's ID",
  },
  {
    name: "engineerEmail",
    type: "input",
    message: "Type in the Engineer's email",
  },
  {
    name: "engineerGithub",
    type: "input",
    message: "Type in the Engineer's GitHub username",
  },
];

const internQuestions = [
  {
    name: "internName",
    type: "input",
    message: "Type in the Intern's name",
  },
  {
    name: "internId",
    type: "input",
    message: "Type in the Intern's ID",
  },
  {
    name: "internEmail",
    type: "input",
    message: "Type in the Intern's email",
  },
  {
    name: "internSchool",
    type: "input",
    message: "Type in the Intern's school name",
  },
];

let inProgress = true;

const init = () => {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    switch (answers.position) {
      case "Manager":
        managerFunction();
        break;

      case "Engineer":
        engineerFunction();
        break;

      case "Intern":
        internFunction();
        break;

      case "Quit": //! or add it to the below case?
        quitFunction();
        inProgress = false; //! Is this still necessary?
        break;

      //case "Quit":
      //inProgress = false;
      //break;

      default:
        inProgress = false;
        break;
    }
  });
};

init();

//empty array for team members (all added profiles)
teamMembers = [];

//"addedManager" includes Manager-specific details
function managerFunction() {
  inquirer.prompt(managerQuestions).then((managerAnswers) => {
    console.log(managerAnswers);
    const addedManager = new Manager(
      managerAnswers.managerName,
      managerAnswers.managerId,
      managerAnswers.managerEmail,
      managerAnswers.managerOfficeNumber
    );
    teamMembers.push(addedManager);
    init();
  });
}

//"addedEngineer" includes Engineer-specific details
function engineerFunction() {
  inquirer.prompt(engineerQuestions).then((engineerAnswers) => {
    console.log(engineerAnswers);
    const addedEngineer = new Engineer(
      engineerAnswers.engineerName,
      engineerAnswers.engineerId,
      engineerAnswers.engineerEmail,
      engineerAnswers.engineerGithub
    );
    teamMembers.push(addedEngineer);
    init();
  });
}

//"addedIntern" includes Intern-specific details
function internFunction() {
  inquirer.prompt(internQuestions).then((internAnswers) => {
    console.log(internAnswers);
    const addedIntern = new Intern(
      internAnswers.internName,
      internAnswers.internId,
      internAnswers.internEmail,
      internAnswers.internGithub
    );
    teamMembers.push(addedIntern);
    init();
  });
}

const fs = require("fs");

function quitFunction() {
  const htmlTemplate = generateHtml();
  fs.writeFile(`./dist/index.html`, htmlTemplate, (err) =>
    err ? console.log(err) : console.log("Your page was generated.")
  );
}
//HTML structure that will be populated by user input
function generateHtml() {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
      rel="stylesheet"
      href="https://unpkg.com/@blaze/css@x.x.x/dist/blaze/blaze.css"/>
      <link rel="stylesheet" href="./dist/styles.css" />
      <title>My Team</title>
    </head>
    <body>
    <header       
    id="header"
    class="o-container o-container--large o-container--medium o-container--small o-container--xsmall"
    >
        <h1 class="c-heading u-large" style="text-align: center" id="headerTitle">
        My Team
        </h1>
    </header>
    
    ${JSON.stringify(teamMembers)}
 
    </body>
  </html>
  `;
}
