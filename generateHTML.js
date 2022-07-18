const generateHTML = ({ name, location, github, linkedin }) =>
    `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
    <h1>Hi! I'm ${name}</h1>
    <p>I'm from ${location}</p>
    <ul>
        <li>Github: ${github}</li>
        <li>Linkedin: ${linkedin}</li>
    </ul>
    </body>
    </html>`


module.exports = generateHTML;