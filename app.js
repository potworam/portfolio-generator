const generatePage = require('./src/page-template.js');
const fs = require('fs');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const name = profileDataArgs[0];
const github = profileDataArgs[1];
console.log(profileDataArgs);

 
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);
  
    console.log('Portfolio complete! Check out index.html to see the output!');
  });