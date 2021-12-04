const fs = require('fs');

// Parse the input file
/*const fileData = fs.readFileSync(process.argv[2], 'utf8');
const splitInput = fileData.split('\n');
let sanitizedInput = [];
for (let idx = 0; idx < splitInput.length; idx++) {
    sanitizedInput.push(parseInt(splitInput[idx]));
}

function part1() {
    let count = 0;
    for (let idx = 1; idx < sanitizedInput.length; idx++) {
        if (sanitizedInput[idx] > sanitizedInput[idx-1]) {
            count++;
        }
    }
    console.log(count);
}

function part2(input = sanitizedInput, len = parseInt(process.argv[3])) {
    let count = 0;
    let startIdx = 0;
    let endIdx = len - 1;
    
    let oldSum = 0;
    for (idx = 0; idx < len; idx++) {
        oldSum += input[idx];
    }
    while (endIdx < input.length) {
        // Get the new sum and update the markers
        endIdx++;
        const newSum = oldSum - input[startIdx] + input[endIdx];
        startIdx++;

        // Compare
        if (newSum > oldSum) {
            count++;
        }

        oldSum = newSum;
    }

    console.log(count);
}*/

day2 = () => {
    const fileData = fs.readFileSync(process.argv[2], 'utf8');
    const splitInput = fileData.split('\n');
    let sanitizedDirections = [];
    let sanitizedDepths = [];
    for (let idx = 0; idx < splitInput.length; idx++) {
        const line = splitInput[idx].split(' ');
        sanitizedDirections.push(line[0]);
        sanitizedDepths.push(parseInt(line[1]));
    }

    let position = 0;
    let depth = 0;
    let aim = 0;
    for (let idx = 0; idx < sanitizedDirections.length; idx++) {
        switch (sanitizedDirections[idx]) {
            case 'forward':
                position += sanitizedDepths[idx];
                depth += (sanitizedDepths[idx] * aim);
                break;
            case 'down':
                aim += sanitizedDepths[idx];
                break;
            case 'up':
                aim -= sanitizedDepths[idx];
                break;
            default:
                console.error('wtf misinterpreted direction');
                break;
        }
    }

    console.log("position: " + position);
    console.log("depth: " + depth);
    console.log("product: " + position*depth);
}

day2();