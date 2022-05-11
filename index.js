const Manager = require("./lib/ManagerClass");
const Engineer = require("./lib/EngineerClass");
const Intern = require("./lib/InternClass");
const fs = require("fs");
const inquirer = require("inquirer");
const render = require("./src/page-template");

let teamIDs = [];
const team = {
  manager: null,
  engineers: [],
  interns: [],
};

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type the manager's full name here.",
        name: "name",
        validate(answer) {
          if (!answer || answer.trim().split("").indexOf(" ") === -1) {
            return "You must type the employee's first and last name in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type a manager's ID here.",
        name: "id",
        validate(answer) {
          if (
            !answer ||
            parseInt(answer).toString().length !== answer.length ||
            answer.length !== 4
          ) {
            return "You must type a numeric, 4-digit ID in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the manager's email here.",
        name: "email",
        validate(answer) {
          if (!answer || answer.split("").indexOf("@") === -1) {
            return "You must type an email in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the manager's office number here.",
        name: "officeNumber",
        validate(answer) {
          if (
            !answer ||
            parseInt(answer).toString().length !== answer.length ||
            answer.length !== 3
          ) {
            return "You must type a 3 digit integer in this field.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNumber
      );
      team.manager = manager;
      teamIDs.push(answers.id);
      createTeam();
    });
}

function createTeam() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Which type of team member would you like to add?",
        choices: [
          "Engineer",
          "Intern",
          "I don't want to add any more employees",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.choice) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        default:
          buildTeam();
          break;
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type the engineer's full name here.",
        name: "name",
        validate(answer) {
          if (!answer || answer.trim().split("").indexOf(" ") === -1) {
            return "You must type the employee's first and last name in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type an engineer's ID here.",
        name: "id",
        validate(answer) {
          if (
            !answer ||
            parseInt(answer).toString().length !== answer.length ||
            answer.length !== 4
          ) {
            return "You must type a numeric, 4-digit ID in this field.";
          }
          if (teamIDs.includes(answer)) {
            return "This ID has already been used.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the engineer's email here.",
        name: "email",
        validate(answer) {
          if (!answer || answer.split("").indexOf("@") === -1) {
            return "You must type an email in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the engineer's github username here.",
        name: "github",
        validate(answer) {
          if (!answer) {
            return "You must enter a github username here.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      team.engineers.push(engineer);
      teamIDs.push(answers.id);
      createTeam();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Type the intern's full name here.",
        name: "name",
        validate(answer) {
          if (!answer || answer.trim().split("").indexOf(" ") === -1) {
            return "You must type the employee's first and last name in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type an intern's ID here.",
        name: "id",
        validate(answer) {
          if (
            !answer ||
            parseInt(answer).toString().length !== answer.length ||
            answer.length !== 4
          ) {
            return "You must type a numeric, 4-digit ID in this field.";
          }
          if (teamIDs.includes(answer)) {
            return "This ID has already been used.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the intern's email here.",
        name: "email",
        validate(answer) {
          if (!answer || answer.split("").indexOf("@") === -1) {
            return "You must type an email in this field.";
          }
          return true;
        },
      },
      {
        type: "input",
        message: "Type the intern's school here.",
        name: "school",
        validate(answer) {
          if (!answer) {
            return "You must type the intern's school here.";
          }
          return true;
        },
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      team.interns.push(intern);
      teamIDs.push(answers.id);
      createTeam();
    });
}

function buildTeam() {
  fs.writeFile("dist/team.html", render(team), (err) => {
    if (err) {
      console.log(err);
    }
  });
}

createManager();
