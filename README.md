# Team Profile Generator ![MIT License Badge](https://camo.githubusercontent.com/302a0a2a90397c2fc68f3838a6c9b9cebec684d041d250065a05bebab1412cd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d726564)

## Description

The `Team Profile Genrator` is a command-line application that accepts information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each team member in the team.

- The program is created using `node.js` and utilises the `npm` package `inquirer`.
- HTML 5, CSS and Bootstrap to generate the HTML page.

## Table of Contents

## Installation

1. Clone the repo from GitHub to your local folder.
2. Run the command `npm i` to install the `npm` package `inquirer`.
3. Run the command `npm i jest` to install the `npm` package `jest`.

## Usage instructions

**To start using the Team Generator application**:

1. Run the command `node index.js` from the command prompt.
2. Enter the `Manager's` information.
3. Select the type of employee: `Engineer` or `Intern` and enter the rerquested information.
4. Select `Exit` to exit the application and generate the HTML page.
   > **Note**: The generated HTML files is saved in the ./dist/generatedHTML.html folder.

## Preview and Screenshots

### Command-line input

![Command-Line Input](./images/TeamGeneratorTerminal-Input.png)

### HTML File output

![Team Profile HTML File](./images/TeamGeneratorOutput.png)

## Walkthrough and Demo

### Unit tests and running the application

![Unit test and running the application](./images/DemoTeamProfileGenerator-1.gif)

- Link to [MP4](./dist/DemoTeamProfileGenerator-1.mp4) of the Unit test and demo of the application

### Accessing Email and Github from HTML Page

![Email and Github demo](./images/DemoTeamProfileGenerator-2.gif)

- Link to [MP4](./dist/DemoTeamProfileGenerator-2.mp4)
