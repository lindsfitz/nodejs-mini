const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./generateHTML')

// const generateHTML = ({ name, location, github, linkedin }) =>
//     `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <title>Document</title>
//     </head>
//     <body>
//     <h1>Hi! I'm ${name}</h1>
//     <p>I'm from ${location}</p>
//     <ul>
//         <li>Github: ${github}</li>
//         <li>Linkedin: ${linkedin}</li>
//     </ul>
//     </body>
//     </html>`

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "whats ur name?"
        },
        {
            type: 'input',
            name: 'location',
            message: 'where are you from?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'whats your github username?'
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'whats your linkedin?'
        }
    ])
}

const init = () => {
    promptUser()
    .then((answers => fs.writeFileSync('index.html', generateHTML(answers))))
    .then(() => console.log('nice'))
    .catch((err) => console.log(err))
}

init();

// .then((answers) => {
    // const content = generateHTML(answers);

//     fs.writeFile('index.html', content, (err) => err ? console.log(err) : console.log('nice'));
// })