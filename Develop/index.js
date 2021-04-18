const inquirer = require('inquirer');
const generateMarkDown = require("./utils/generateMarkdown");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a brief description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a brief description of your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'Please enter a brief description of the steps required to install your project',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.',
        },
        {
            type: 'confirm',
            name: 'confirmUsagePicture',
            message: 'Do you want to add a screenshot to your README?',
            default: true
        },
        {
            type: 'input',
            name: 'usagePicture',
            message: 'Add the relative path for the picture',
            when: ({ confirmUsagePicture }) => confirmUsagePicture
        },
        {
            type: 'confirm',
            name: 'confirmAboutLicense',
            message: 'Would you like to add a license?',
        },
        {
            type: 'checkbox',
            name: 'licenseInfo',
            message: 'Do you want to include any of the following licenses?',
            choices: ["Apache", "BSD", "EPL", "MIT"],
            when: ({confirmAboutLicense}) => confirmAboutLicense
        },
        {
            type: 'confirm',
            name: 'confirmLanguage',
            message: 'Would you like to add the coding languages you userd?',
            default: true
          },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What coding language did you use for this project?',
            choices: ["JavaScript", "NodeJS", "HTML", "CSS", "ReactJS"],
            when: ({ confirmLanguage }) => confirmLanguage
        },
        {
            type: 'input',
            name: "email",
            message: "What is your email?"
        },
        {
            type: 'input',
            name: "githubname",
            message: "What is your github user name?",
        },
    ])
}


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

questions()
    .then(questions => {
        const pageHTML = generateMarkDown(questions);

        fs.writeFile('README.md', pageHTML, err => {
            if (err) throw new Error(err);

            console.log('Page created! Check out your read me file!');
        });
    });