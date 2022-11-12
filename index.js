//include packages needed for the application

//inquirer
const inquirer = require("inquirer");
//file server
const fileToWrite = require("fs");
//html template file
const generateHTML = require("./src/generateTemplate.js");

//constructors
//const employee = require("./lib/employee.js");
const manager = require("./lib/manager.js");
const engineer = require("./lib/engineer.js");
const intern = require("./lib/intern.js");

function writeToFile(filename, data) {
  //function writes data to html file
}
function generateQuestions() {
  //function accepts user input
  //const empData = new employee("John", "0001", "john@company.com.au");
  const mgrData = new manager(
    "John",
    "0001",
    "john@company.com.au",
    "08 1234 4567"
  );

  //console.log(empData);
  console.log("Manager Data");
  console.log(mgrData);
  console.log(mgrData.getRole());

  const engineerData = new engineer(
    "Alec",
    "0002",
    "alec@company.com.au",
    "alec-regusa"
  );
  console.log("Engineer Data");
  console.log(engineerData);
  console.log("github:" + engineerData.getGitHub());
  console.log("role:" + engineerData.getRole());

  const internData = new intern(
    "John",
    "0003",
    "john@company.com.au",
    "ZUniversity"
  );
  console.log("Intern Data");
  console.log(internData);
  console.log("school:" + internData.getSchool());
  console.log("role:" + internData.getRole());
}
//main
generateQuestions();
