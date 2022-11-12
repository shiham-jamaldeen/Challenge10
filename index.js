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
let engineerArray = []; //store engineer data array

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
function generateQuestions() {
  //function accepts user input
  const mgrData = new manager(
    "John",
    "0001",
    "john@company.com.au",
    "08 1234 4567"
  );

  let engineerData = new engineer(
    "Alec",
    "0002",
    "alec@company.com.au",
    "alec-regusa"
  );
  engineerArray.push(engineerData);

  let engineerData1 = new engineer(
    "Grace",
    "0004",
    "grace@company.com.au",
    "grace-lord"
  );
  engineerArray.push(engineerData1);

  const data = generateHTML(mgrData, engineerArray);
  const fileName = "./dist/generatedHTML.html";
  writeToFile(fileName, data);
}
//main
generateQuestions();
