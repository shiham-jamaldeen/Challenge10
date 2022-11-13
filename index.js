//include packages needed for the application

//inquirer
const inquirer = require("inquirer");
//file server
const fs = require("fs");
//html template file
const generateHTML = require("./src/generateTemplate.js");

//constructors
//const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");

//global variables

const engineerArray = [];
const internArray = [];

function writeToFile(fileName, data) {
  //function writes data to html file
  fs.writeFile(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Success! Your file was successfully created " + " " + fileName
        )
  );
}
function processInfomation(mngrData, engineerArray, internArray) {
  //call the function pass input from user to generate template file
  const writeData = generateHTML(mngrData, engineerArray, internArray);
  const fileName = "./dist/generatedHTML.html";
  //call the function to write the template to a physical HTML file
  writeToFile(fileName, writeData);
}
function getManagerResponses() {
  //function accepts user input
  //Manager Responses

  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the manager's Name (Required):",
        name: "empName",
      },
      {
        type: "input",
        message: "Enter the manager's Employee ID (Required):",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the manager's Email Address (Required):",
        name: "email",
      },
      {
        type: "input",
        message: "Enter the manager's phone number:",
        name: "officeNumber",
      },
      {
        type: "list",
        message: "What data would you like to enter?",
        choices: ["Engineer", "Intern"],
        name: "userChoice",
      },
    ])
    .then((mngrResponses) => {
      //write answers to manager object
      let mgrData = new manager(
        mngrResponses.empName,
        mngrResponses.id,
        mngrResponses.email,
        mngrResponses.officeNumber
      );

      //check for user input
      if (mngrResponses.userChoice === "Engineer") {
        //call Engineer Responses
        console.log("***Enter Engineer details***");
        getEngineerResponses(mgrData);
      } else if (mngrResponses.userChoice === "Intern") {
        //call Intern Responses
        console.log("***Enter Intern/Trainee details***");
        getInternResponses(mgrData);
      }
    });
}
function getEngineerResponses(mgrData) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the engineer's Name (Required):",
        name: "empName",
      },
      {
        type: "input",
        message: "Enter the engineer's Employee ID (Required):",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the engineer's Email Address (Required):",
        name: "email",
      },

      {
        type: "input",
        message: "Enter the engineer's GitHub handle:",
        name: "gitHub",
      },
    ])
    .then((engineerResponses) => {
      //initialise the Engineer object and assign responses
      let engineerData = new engineer(
        engineerResponses.empName,
        engineerResponses.id,
        engineerResponses.email,
        engineerResponses.gitHub
      );
      //write the data to an array
      engineerArray.push(engineerData);
      console.log(engineerArray);
      //call  user choice function, to check what user whats to do next
      userChoice(mgrData);
    });
}
function userChoice(mgrData) {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What data would you like to enter?",
        choices: ["Engineer", "Intern", "Exit"],
        name: "userChoice",
      },
    ])
    .then((userResposnses) => {
      if (userResposnses.userChoice === "Engineer") {
        //call Engineer Responses
        console.log("***Enter Engineer details***");
        getEngineerResponses(mgrData);
      } else if (userResposnses.userChoice === "Intern") {
        //call Intern Responses
        console.log("***Enter Intern/Trainee details***");
        getInternResponses(mgrData);
      } else if (userResposnses.userChoice === "Exit") {
        console.log("Thank you! Your responses will be now saved!");
        //console.log(managerArray);
        //console.log(engineerArray);
        processInfomation(mgrData, engineerArray, internArray);
        return;
      }
    });
}
function getInternResponses(mgrData) {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the trainee's Name (Required):",
        name: "empName",
      },
      {
        type: "input",
        message: "Enter the trainees's Employee ID (Required):",
        name: "id",
      },
      {
        type: "input",
        message: "Enter the trainee's Email Address (Required):",
        name: "email",
      },

      {
        type: "input",
        message: "Enter the trainee's school:",
        name: "school",
      },
    ])
    .then((internResponses) => {
      let internData = new intern(
        internResponses.empName,
        internResponses.id,
        internResponses.email,
        internResponses.school
      );
      //write data to an array
      internArray.push(internData);
      //call function to accept user choice
      userChoice(mgrData);
    });
}
//main
getManagerResponses();
//processInfomation(managerArray, engineerArray);
