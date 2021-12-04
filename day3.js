const fs = require('fs');
const fileData = fs.readFileSync(process.argv[2], 'utf8');
const splitInput = fileData.split('\n');
splitInput.pop(); // get rid of extra newline at EOF
console.log(splitInput.length);